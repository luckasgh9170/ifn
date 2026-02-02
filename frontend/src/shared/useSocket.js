import { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

export function useSocket({ enabled } = { enabled: true }) {
  const [connected, setConnected] = useState(false);

  const socket = useMemo(() => {
    return io(import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080', {
      transports: ['websocket', 'polling'],
      autoConnect: false
    });
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const onConnect = () => setConnected(true);
    const onDisconnect = () => setConnected(false);
    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, [enabled, socket]);

  return { socket, connected };
}


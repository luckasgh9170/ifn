import { Server } from 'socket.io';

let io;

export function attachSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
      credentials: true
    }
  });

  io.on('connection', (socket) => {
    socket.emit('ai:progress', { message: 'connected' });

    socket.on('campaign:join', ({ campaignId }) => {
      if (campaignId) socket.join(`campaign:${campaignId}`);
    });

    socket.on('campaign:leave', ({ campaignId }) => {
      if (campaignId) socket.leave(`campaign:${campaignId}`);
    });
  });

  return io;
}

export function getIo() {
  if (!io) throw new Error('Socket.io is not initialized yet');
  return io;
}


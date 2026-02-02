import http from 'http';
import { createApp } from './app.js';
import { attachSocket } from './socket.js';

const { app } = await createApp();
const server = http.createServer(app);
attachSocket(server);

const port = Number(process.env.PORT || 8080);
server.listen(port, () => {
  console.log(`Backend listening on http://localhost:${port}`);
});

import express from 'express';
import { Inquiry } from '../models/Inquiry.js';
import { adminEvents } from '../adminEvents.js';

const router = express.Router();

function auth(req, res, next) {
  const token = req.header('x-admin-token') || req.query?.token;
  const expected = process.env.ADMIN_TOKEN;
  if (!expected || token !== expected) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  return next();
}

router.get('/inquiries', auth, async (req, res) => {
  const items = await Inquiry.find().sort({ createdAt: -1 }).limit(100);
  res.json({ items });
});

router.get('/stream', auth, (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();

  const send = (payload) => {
    res.write(`data: ${JSON.stringify(payload)}\n\n`);
  };

  const onInquiry = (payload) => send({ type: 'inquiry', payload });
  adminEvents.on('inquiry', onInquiry);

  const ping = setInterval(() => res.write('event: ping\ndata: {}\n\n'), 25000);

  req.on('close', () => {
    clearInterval(ping);
    adminEvents.off('inquiry', onInquiry);
  });
});

export default router;


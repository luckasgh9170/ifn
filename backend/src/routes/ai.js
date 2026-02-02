import express from 'express';
import { z } from 'zod';
import { getIo } from '../socket.js';

const router = express.Router();

const generateSchema = z.object({
  product: z.string().min(1).max(120),
  audience: z.string().min(1).max(160),
  goal: z.string().min(1).max(120),
  tone: z.string().min(1).max(80),
  socketId: z.string().optional()
});

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function buildAdText({ product, audience, goal, tone }) {
  const headline = `${product}: ${goal} made simple`;
  const body = `For ${audience} — a ${tone.toLowerCase()} campaign message powered by AI targeting and real-time analytics.`;
  const cta = `Start now · Get a demo · Improve ROI`;
  return `${headline}\n\n${body}\n\n${cta}`;
}

router.post('/generate-ad', async (req, res) => {
  const parsed = generateSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input', details: parsed.error.flatten() });

  const io = getIo();
  const socketId = parsed.data.socketId;
  const emit = (event, payload) => {
    if (socketId) io.to(socketId).emit(event, payload);
    else io.emit(event, payload);
  };

  (async () => {
    emit('ai:progress', { message: 'validating input' });
    await sleep(350);
    emit('ai:progress', { message: 'drafting headline variants' });
    await sleep(450);
    emit('ai:progress', { message: 'assembling copy + CTA' });
    await sleep(500);
    emit('ai:progress', { message: 'scoring variants (simulated)' });
    await sleep(450);
    const adText = buildAdText(parsed.data);
    emit('ai:result', { adText });
  })().catch(() => {
    emit('ai:progress', { message: 'generation failed' });
  });

  // Respond immediately; client will also receive Socket.io updates.
  res.json({ queued: true });
});

export default router;


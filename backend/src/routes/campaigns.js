import express from 'express';
import { z } from 'zod';
import { Campaign } from '../models/Campaign.js';
import { getIo } from '../socket.js';

const router = express.Router();

const createSchema = z.object({
  name: z.string().min(1).max(140),
  objective: z.string().min(1).max(140),
  budgetDaily: z.number().min(1).max(100000).optional().default(50)
});

router.get('/', async (req, res) => {
  const items = await Campaign.find().sort({ createdAt: -1 }).limit(50);
  res.json({ items });
});

router.post('/', async (req, res) => {
  const parsed = createSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input', details: parsed.error.flatten() });
  const campaign = await Campaign.create(parsed.data);

  getIo().emit('campaign:update', { type: 'created', id: campaign._id, campaign });
  res.status(201).json({ id: campaign._id, campaign });
});

router.patch('/:id/status', async (req, res) => {
  const { id } = req.params;
  const status = z.enum(['draft', 'active', 'paused']).safeParse(req.body?.status);
  if (!status.success) return res.status(400).json({ error: 'Invalid status' });

  const campaign = await Campaign.findByIdAndUpdate(id, { status: status.data }, { new: true });
  if (!campaign) return res.status(404).json({ error: 'Not found' });
  getIo().to(`campaign:${id}`).emit('campaign:update', { type: 'status', id, status: campaign.status });
  res.json({ campaign });
});

export default router;


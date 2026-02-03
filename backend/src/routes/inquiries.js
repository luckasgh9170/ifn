import express from 'express';
import { z } from 'zod';
import { Inquiry } from '../models/Inquiry.js';
import { adminEvents } from '../adminEvents.js';

const router = express.Router();

const inquirySchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(180),
  company: z.string().max(180).optional().default(''),
  message: z.string().min(1).max(2000)
});

router.post('/', async (req, res) => {
  const parsed = inquirySchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: 'Invalid input', details: parsed.error.flatten() });

  const inquiry = await Inquiry.create(parsed.data);
  adminEvents.emit('inquiry', {
    id: inquiry._id,
    name: inquiry.name,
    email: inquiry.email,
    company: inquiry.company,
    message: inquiry.message,
    createdAt: inquiry.createdAt
  });
  return res.status(201).json({ id: inquiry._id });
});

router.get('/', async (req, res) => {
  const items = await Inquiry.find().sort({ createdAt: -1 }).limit(50);
  res.json({ items });
});

export default router;

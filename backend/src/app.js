import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDb } from './db.js';
import inquiriesRouter from './routes/inquiries.js';
import campaignsRouter from './routes/campaigns.js';
import aiRouter from './routes/ai.js';

dotenv.config();

export async function createApp() {
  await connectDb();

  const app = express();
  app.use(helmet());
  app.use(
    cors({
      origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
      credentials: true
    })
  );
  app.use(express.json({ limit: '1mb' }));
  app.use(morgan('dev'));

  app.get('/api/health', (req, res) => res.json({ ok: true }));

  app.use('/api/inquiries', inquiriesRouter);
  app.use('/api/campaigns', campaignsRouter);
  app.use('/api/ai', aiRouter);

  app.use((req, res) => res.status(404).json({ error: 'Not found' }));

  return { app };
}

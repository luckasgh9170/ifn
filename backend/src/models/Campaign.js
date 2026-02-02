import mongoose from 'mongoose';

const campaignSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    objective: { type: String, required: true, trim: true },
    budgetDaily: { type: Number, default: 50 },
    status: { type: String, enum: ['draft', 'active', 'paused'], default: 'draft' },
    metrics: {
      ctr: { type: Number, default: 0 },
      cpa: { type: Number, default: 0 },
      roas: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

export const Campaign = mongoose.model('Campaign', campaignSchema);


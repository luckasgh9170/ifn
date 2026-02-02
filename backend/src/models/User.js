import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    name: { type: String, default: '', trim: true }
  },
  { timestamps: true }
);

export const User = mongoose.model('User', userSchema);


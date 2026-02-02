import mongoose from 'mongoose';

export async function connectDb() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ifn';
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(uri);
}


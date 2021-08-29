import * as mongoose from 'mongoose';
    
export const SavingsSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  month: String,
  year: Number,
});
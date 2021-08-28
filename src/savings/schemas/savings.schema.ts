import * as mongoose from 'mongoose';
    
export const SavingsSchema = new mongoose.Schema({
  title: String,
  description: String,
  amount: String,
  month_created: String,
  month_updated: String,
});
import * as mongoose from 'mongoose';
    
export const SavingsSchema = new mongoose.Schema({
  name: String,
  description: String,
  amount: String,
  month_created: String,
  month_updated: String,
});
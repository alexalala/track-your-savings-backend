import { Document } from 'mongoose';
    
export interface Account extends Document {
  readonly name: string;
  readonly description: string;
  readonly amount: string;
  readonly month_created: string;
  readonly month_updated: string;
}
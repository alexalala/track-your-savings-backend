import { Document } from 'mongoose';
    
export interface Account extends Document {
  readonly title: string;
  readonly amount: number;
  readonly month: string;
  readonly year: number;
}
import { Module } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { SavingsController } from './savings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SavingsSchema } from './schemas/savings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: SavingsSchema }]),
  ],
  providers: [SavingsService],
  controllers: [SavingsController]
})
export class SavingsModule {}

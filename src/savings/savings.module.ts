import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { SavingsService } from './savings.service';
import { SavingsController } from './savings.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SavingsSchema } from './schemas/savings.schema';
import { AuthenticationMiddleware } from 'src/common/authentication.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: SavingsSchema }]),
  ],
  providers: [SavingsService],
  controllers: [SavingsController]
})

export class SavingsModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(AuthenticationMiddleware).forRoutes(
      { method: RequestMethod.POST, path: '/savings/account' },
      { method: RequestMethod.PUT, path: '/savings/edit' },
      { method: RequestMethod.DELETE, path: '/savings/delete' }
    )
  }
}

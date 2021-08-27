import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'; 
import { SavingsModule } from './savings/savings.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest-savings-project', { useNewUrlParser: true }),
    SavingsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

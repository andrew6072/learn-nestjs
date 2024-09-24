import { Module } from '@nestjs/common';
import { AppController, HelloController } from './app.controller';
import { AppService, HelloService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HelloController],
  providers: [AppService, HelloService],
})
export class AppModule {}

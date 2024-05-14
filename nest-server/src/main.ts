//Entry point of the application

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  //Creates an instance of the Nest application, which is a wrapper around the Express application
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();
  //Start up http listener
  await app.listen(3000);
}
bootstrap();

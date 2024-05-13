//Entry point of the application

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  //Creates an instance of the Nest application
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

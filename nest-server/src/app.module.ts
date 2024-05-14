//Root module of the application

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiModule } from './problem/problem.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ApiModule, MongooseModule.forRoot('mongodb://localhost/nest')],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('api');
  }
}

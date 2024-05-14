//Root module of the application

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { LoggerMiddleware } from './logger/logger.middleware';

@Module({
  imports: [ApiModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('api');
  }
}

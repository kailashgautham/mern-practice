import { Module } from '@nestjs/common';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from 'src/problem/schemas/problem.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ProblemController],
  providers: [ProblemService],
  exports: [ProblemService],
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: Problem.name, schema: ProblemSchema }])]
})
export class ApiModule {}

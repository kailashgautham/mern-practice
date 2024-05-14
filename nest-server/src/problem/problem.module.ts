import { Module } from '@nestjs/common';
import { ProblemController } from './problem.controller';
import { ProblemService } from './problem.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from 'src/schemas/problem.schema';

@Module({
  controllers: [ProblemController],
  providers: [ProblemService],
  exports: [ProblemService],
  imports: [MongooseModule.forFeature([{ name: Problem.name, schema: ProblemSchema }])]
})
export class ApiModule {}

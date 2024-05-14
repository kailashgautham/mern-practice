import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ProblemService } from './problem.service';
import { Problem } from 'src/schemas/problem.schema';

@Controller('api')
export class ProblemController {

    constructor(private problemService: ProblemService) {}

    @Post()
    addProblem(@Body() createProblemDto: CreateProblemDto): Promise<string> {
        return this.problemService.getFeedback(createProblemDto);
    }
}

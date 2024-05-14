import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { ApiService } from './api.service';

@Controller('api')
export class ApiController {

    constructor(private apiService: ApiService) {}

    @Post()
    addProblem(@Body() problem: CreateProblemDto): CreateProblemDto {
        this.apiService.create(problem);
        return problem;
    }

    @Get()
    getProblems(): CreateProblemDto[] {
        return this.apiService.getProblems();
    }
}

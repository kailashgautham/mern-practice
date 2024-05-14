import { Injectable } from '@nestjs/common';
import { Problem } from './interfaces/problem.interface';

@Injectable()
export class ApiService {
    private readonly problems: Problem[] = [];
    
    create(problem: Problem) {
        this.problems.push(problem);
    }

    getProblems() {
        return this.problems;
    }
}

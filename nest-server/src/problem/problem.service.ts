import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Problem } from 'src/schemas/problem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProblemDto } from './dto/create-problem.dto';

@Injectable()
export class ProblemService {

    constructor(@InjectModel(Problem.name) private problemModel: Model<Problem>) {}
    
    async create(createProblemDto: CreateProblemDto): Promise<Problem> {
        const newProblem = new this.problemModel(createProblemDto);
        return newProblem.save();
    }

    getProblems(): Promise<Problem[]> {
        return this.problemModel.find().exec();
    }
}

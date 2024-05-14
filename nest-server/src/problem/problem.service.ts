import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Problem } from 'src/schemas/problem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProblemDto } from './dto/create-problem.dto';

@Injectable()
export class ProblemService {

    constructor(@InjectModel(Problem.name) private problemModel: Model<Problem>) {}
    
    async getFeedback(createProblemDto: CreateProblemDto): Promise<string> {
        const newProblem = new this.problemModel(createProblemDto);
        newProblem.save();
        const feedback = await fetch("https://api.codaveri.com/feedback", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.api_key || '',
            },
            body: JSON.stringify(createProblemDto)
        });
        return await feedback.json();
    }

}

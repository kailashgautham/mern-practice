import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Problem } from 'src/problem/schemas/problem.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProblemDto } from './dto/create-problem.dto';

@Injectable()
export class ProblemService {

    constructor(@InjectModel(Problem.name) private problemModel: Model<Problem>) {}
    
    async getFeedback(createProblemDto: CreateProblemDto): Promise<string> {
        const newProblem = new this.problemModel(createProblemDto);
        newProblem.save();
        let result = await fetch("https://api.codaveri.com/feedback", {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": process.env.api_key || '',
            },
            body: JSON.stringify(createProblemDto)
        })
        .then(response => {
            return response.json()
        })
        .then(feedback => feedback?.data?.feedback_files?.[0]?.feedback_lines?.[0]?.feedback || "Your program looks good, nicely done!")
        .catch(_ => "Sorry, there was an error. Please try again!");

        return JSON.stringify(result);
    }

}

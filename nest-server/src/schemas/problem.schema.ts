import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProblemDocument = HydratedDocument<Problem>;

@Schema()
export class Problem {
  @Prop()
  name: string;

  @Prop()
  title: string;

  @Prop()
  code: string;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
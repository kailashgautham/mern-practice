import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProblemDocument = HydratedDocument<Problem>;

@Schema({_id: false})
class LanguageVersion {
  @Prop({ required: true })
  language: string;

  @Prop({ required: true })
  version: string;
}

@Schema({_id: false})
class File {
  @Prop({ required: true })
  path: string;

  @Prop({ required: true })
  content: string;
}

@Schema()
export class Problem {
  @Prop({ required: true })
  user_id: string;

  @Prop({ required: true })
  language_version: LanguageVersion;

  @Prop({ required: true })
  files: File[];

  @Prop({ required: true })
  problem_id: string;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
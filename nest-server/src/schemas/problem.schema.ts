import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProblemDocument = HydratedDocument<Problem>;

@Schema({_id: false})
class LanguageVersion {
  @Prop()
  language: string;

  @Prop()
  version: string;
}

@Schema({_id: false})
class File {
  @Prop()
  path: string;

  @Prop()
  content: string;
}

@Schema()
export class Problem {
  @Prop()
  user_id: string;

  @Prop()
  language_version: LanguageVersion;

  @Prop()
  files: File[];

  @Prop()
  problem_id: string;
}

export const ProblemSchema = SchemaFactory.createForClass(Problem);
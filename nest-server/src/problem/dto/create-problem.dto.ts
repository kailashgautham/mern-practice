export class FileDto {
  path: string;
  content: string;
}

export class LanguageVersionDto {
  language: string;
  version: string;
}

export class CreateProblemDto {
  user_id: string;
  language_version: LanguageVersionDto;
  files: FileDto[];
  problem_id: string;
}
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  examNum: number;

  @IsString()
  description: string;

  @IsString()
  answer: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  comment?: string;
}

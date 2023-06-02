import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsNumber()
  examNum: number;

  @IsString()
  answer: string;

  @IsOptional()
  @IsString()
  code?: string;

  @IsOptional()
  @IsString()
  comment?: string;
}

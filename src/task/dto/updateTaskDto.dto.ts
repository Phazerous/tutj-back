import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsNumber()
  id: number;

  @IsString()
  description: string;

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

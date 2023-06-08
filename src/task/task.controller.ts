import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTaskDto.dto';

@Controller('')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get('tasks/:id')
  async getTaskById(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.getTaskById({ id });
  }

  @Get('tasks')
  async getTasks(@Query() query: { examNum: any }) {
    const examNum = Number(query.examNum);

    if (!isNaN(examNum))
      return await this.taskService.getTasksIdsByExamNum(examNum);

    return await this.taskService.getTasks();
  }

  @Post('tasks')
  @UsePipes(new ValidationPipe())
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.createTask(createTaskDto);
  }

  @Get('examNums')
  async getExamNums() {
    return await this.taskService.getUniqueExamNums();
  }
}

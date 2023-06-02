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
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/createTaskDto.dto';

@Controller('tasks')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number) {
    return await this.taskService.getTaskById({ id });
  }

  @Get()
  async getTasks(@Query() query: { examNum: any }) {
    const examNum = Number(query.examNum);

    if (!isNaN(examNum))
      return await this.taskService.getTasksByExamNum(examNum);

    return await this.taskService.getTasks();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.createTask(createTaskDto);
  }
}

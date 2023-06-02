import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Prisma, Task as TaskModel } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async createTask(task: Prisma.TaskCreateInput): Promise<TaskModel> {
    return this.prisma.task.create({
      data: task,
    });
  }

  async getTaskById(
    task: Prisma.TaskWhereUniqueInput,
  ): Promise<TaskModel | null> {
    return this.prisma.task.findUnique({
      where: task,
    });
  }

  async getTasksByExamNum(examNum: number): Promise<TaskModel[]> {
    return this.prisma.task.findMany({
      where: {
        examNum,
      },
    });
  }

  async getTasks(): Promise<TaskModel[]> {
    return this.prisma.task.findMany();
  }
}

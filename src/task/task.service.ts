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

  async getTasksIdsByExamNum(examNum: number): Promise<number[]> {
    const tasks = await this.prisma.task.findMany({
      where: {
        examNum,
      },
      select: {
        id: true,
      },
    });

    const tasksIdsArray = tasks.map((task) => task.id);

    return tasksIdsArray;
  }

  async getTasks(): Promise<TaskModel[]> {
    return this.prisma.task.findMany();
  }

  async getUniqueExamNums() {
    const examNums = await this.prisma.task.findMany({
      distinct: ['examNum'],
      select: {
        examNum: true,
      },
    });

    const examNumsArray = examNums.map(
      ({ examNum }: { examNum: number }) => examNum,
    );

    return examNumsArray;
  }
}

import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { PrismaService } from './prisma.service';
import { FilesModule } from './files/files.module';

@Module({
  imports: [TaskModule, FilesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}

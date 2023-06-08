import { Module } from '@nestjs/common';
import { FilesController } from './files.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [FilesController],
  providers: [],
  imports: [ConfigModule.forRoot()],
})
export class FilesModule {}

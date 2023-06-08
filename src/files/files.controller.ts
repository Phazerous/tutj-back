import { Controller, Param, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import * as fs from 'fs';

@Controller('files')
export class FilesController {
  @Get(':path')
  async sendFile(@Param('path') path: string, @Res() res: Response) {
    const filePath = process.env.STORED_FILES_PATH + path;

    if (fs.existsSync(filePath)) {
      res.sendFile(filePath);
    } else {
      res.status(404).send('File not found');
    }
  }
}

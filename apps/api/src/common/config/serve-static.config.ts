import { Injectable } from '@nestjs/common';
import {
  ServeStaticModuleOptions,
  ServeStaticModuleOptionsFactory,
} from '@nestjs/serve-static';
import { join } from 'path';

@Injectable()
export class ServeStaticConfig implements ServeStaticModuleOptionsFactory {
  jqueryPath: string;
  constructor() {
    this.jqueryPath = join(process.cwd(), 'node_modules', 'jquery', 'dist');
  }

  createLoggerOptions():
    | ServeStaticModuleOptions[]
    | Promise<ServeStaticModuleOptions[]> {
    return [
      {
        rootPath: this.jqueryPath,
        serveRoot: '/jquery/',
      },
    ];
  }
}

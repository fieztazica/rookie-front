import { Injectable } from '@nestjs/common';
import {
  ServeStaticModuleOptions,
  ServeStaticModuleOptionsFactory,
} from '@nestjs/serve-static';
import { join } from 'path';

@Injectable()
export class ServeStaticConfig implements ServeStaticModuleOptionsFactory {
  jqueryPath: string;
  editorPath: string;
  ckSourceEditPath: string;
  constructor() {
    this.jqueryPath = join(process.cwd(), 'node_modules', 'jquery', 'dist');
    this.editorPath = join(process.cwd(), 'node_modules', 'tinymce');
  }

  createLoggerOptions():
    | ServeStaticModuleOptions[]
    | Promise<ServeStaticModuleOptions[]> {
    return [
      {
        rootPath: this.jqueryPath,
        serveRoot: '/jquery/',
      },
      {
        rootPath: this.editorPath,
        serveRoot: '/editor/',
      },
    ];
  }
}

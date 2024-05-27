import { Module } from '@nestjs/common';
import { ConfigsService } from './configs.service';
import { ConfigsResolver } from './configs.resolver';

@Module({
  providers: [ConfigsResolver, ConfigsService],
  exports: [ConfigsService],
})
export class ConfigsModule {}

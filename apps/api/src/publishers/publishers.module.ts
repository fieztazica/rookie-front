import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service';
import { PublishersResolver } from './publishers.resolver';

@Module({
  providers: [PublishersResolver, PublishersService],
})
export class PublishersModule {}

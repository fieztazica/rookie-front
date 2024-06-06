import { forwardRef, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { FeedbacksModule } from 'src/feedbacks/feedbacks.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [forwardRef(() => FeedbacksModule), RedisModule],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}

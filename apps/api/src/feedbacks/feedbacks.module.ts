import { forwardRef, Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksResolver } from './feedbacks.resolver';
import { ProductsModule } from 'src/products/products.module';
import { CustomersModule } from 'src/customers/customers.module';
import { RedisModule } from 'src/redis/redis.module';

@Module({
  imports: [forwardRef(() => ProductsModule), CustomersModule, RedisModule],
  providers: [FeedbacksResolver, FeedbacksService],
  exports: [FeedbacksService],
})
export class FeedbacksModule {}

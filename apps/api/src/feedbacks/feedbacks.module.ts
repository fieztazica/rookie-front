import { forwardRef, Module } from '@nestjs/common';
import { FeedbacksService } from './feedbacks.service';
import { FeedbacksResolver } from './feedbacks.resolver';
import { ProductsModule } from 'src/products/products.module';
import { CustomersModule } from 'src/customers/customers.module';

@Module({
  imports: [forwardRef(() => ProductsModule), CustomersModule],
  providers: [FeedbacksResolver, FeedbacksService],
  exports: [FeedbacksService],
})
export class FeedbacksModule {}

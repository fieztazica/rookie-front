import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsResolver } from './products.resolver';
import { FeedbacksModule } from 'src/feedbacks/feedbacks.module';

@Module({
  imports: [FeedbacksModule],
  providers: [ProductsResolver, ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}

import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsResolver } from './authors.resolver';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [ProductsModule],
  providers: [AuthorsResolver, AuthorsService],
  exports: [AuthorsService],
})
export class AuthorsModule {}

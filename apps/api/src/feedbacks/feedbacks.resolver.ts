import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { FeedbacksService } from './feedbacks.service';
import { Feedback, PaginatedFeedback } from './entities/feedback.entity';
import { CreateFeedbackInput } from './dto/create-feedback.input';
import { UpdateFeedbackInput } from './dto/update-feedback.input';
import { PaginationArgs } from 'src/common/graphql/pagination.args';
import { FindManyFeedbackArgs } from 'src/__generated__/feedback/find-many-feedback.args';
import { PaginationInput } from 'src/common/graphql/pagination.input';
import { CustomersService } from 'src/customers/customers.service';
import { Customer } from 'src/__generated__/customer/customer.model';
import { ProductsService } from 'src/products/products.service';
import { Product } from 'src/__generated__/product/product.model';
import { ProductRating } from './entities/product-rating.entity';
import { FilterFeedbackInput } from './dto/filter-feedback.input';

@Resolver(() => Feedback)
export class FeedbacksResolver {
  constructor(
    private readonly feedbacksService: FeedbacksService,
    private readonly customersService: CustomersService,
    private readonly productsService: ProductsService,
  ) {}

  @Mutation(() => Feedback)
  createFeedback(
    @Args('createFeedbackInput') createFeedbackInput: CreateFeedbackInput,
  ): Promise<Feedback> {
    return this.feedbacksService.create(createFeedbackInput);
  }

  @Query(() => [Feedback], { name: 'feedbacks' })
  async findAll(@Args({ nullable: true }) options?: FindManyFeedbackArgs) {
    return this.feedbacksService.findAll(options);
  }

  @Query(() => PaginatedFeedback, { name: 'paginatedFeedbacks' })
  async paginatedFindAll(@Args({ nullable: true }) options?: PaginationArgs) {
    return this.feedbacksService.paginatedFindAll(options);
  }

  @Query(() => PaginatedFeedback, { name: 'paginatedFeedbacksByProductId' })
  async paginatedFindAllByProductId(
    @Args('productId', { type: () => String }) productId: string,
    @Args('pagination', { nullable: true }) options?: PaginationInput,
    @Args('filters', { nullable: true }) filters?: FilterFeedbackInput,
  ) {
    return this.feedbacksService.paginatedFindAllByProductId(
      productId,
      options,
      filters,
    );
  }

  @ResolveField('customer', () => Customer)
  getCustomer(@Parent() feedback: Feedback) {
    const { customerId } = feedback;
    return this.customersService.findOne(customerId);
  }

  @ResolveField('product', () => Product)
  getProduct(@Parent() feedback: Feedback) {
    const { productId } = feedback;
    return this.productsService.findOne(productId);
  }

  @Query(() => Feedback, { name: 'feedback' })
  findOne(@Args('id', { type: () => String }) id: string): Promise<Feedback> {
    return this.feedbacksService.findOne(id);
  }

  @Query(() => ProductRating)
  calculateProductRatingByProductId(
    @Args('id', { type: () => String }) id: string,
  ): Promise<ProductRating> {
    return this.feedbacksService.calculateProductRatingByProductId(id);
  }

  @Mutation(() => Feedback)
  updateFeedback(
    @Args('updateFeedbackInput') updateFeedbackInput: UpdateFeedbackInput,
  ): Promise<Feedback> {
    return this.feedbacksService.update(
      updateFeedbackInput.id,
      updateFeedbackInput,
    );
  }

  @Mutation(() => Feedback)
  removeFeedback(
    @Args('id', { type: () => String }) id: string,
  ): Promise<Feedback> {
    return this.feedbacksService.remove(id);
  }
}

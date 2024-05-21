import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';
import { UpdateCustomerInput } from 'src/customers/dto/update-customer.input';
import { CreateFeedbackInput } from 'src/feedbacks/dto/create-feedback.input';
import { UpdateFeedbackInput } from 'src/feedbacks/dto/update-feedback.input';
import { CreateOrderInput } from 'src/orders/dto/create-order.input';
import { UpdateOrderInput } from 'src/orders/dto/update-order.input';
import { CreateProductInput } from 'src/products/dto/create-product.input';
import { UpdateProductInput } from 'src/products/dto/update-product.input';
import {
  CreatePublisherInput,
  DEFAULT_PUBLISHER_CREATE_INPUT,
} from 'src/publishers/dto/create-publisher.input';
import { UpdatePublisherInput } from 'src/publishers/dto/update-publisher.input';
import { UpdateCategoryInput } from 'src/categories/dto/update-category.input';
import { UpdateAuthorInput } from 'src/authors/dto/update-author.input';
import {
  CreateAuthorInput,
  DEFAULT_AUTHOR_CREATE_INPUT,
} from 'src/authors/dto/create-author.input';
import {
  CreateCategoryInput,
  DEFAULT_CATEGORY_CREATE_INPUT,
} from 'src/categories/dto/create-category.input';
import { AuthorsService } from 'src/authors/authors.service';
import { CategoriesService } from 'src/categories/categories.service';
import { CustomersService } from 'src/customers/customers.service';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';
import { PublishersService } from 'src/publishers/publishers.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';

export type GetUniqueKeysReturns = {
  key: string;
  titleCase: string;
};

export type MainLayoutRes = {
  successMessage?: string;
  errorMessage?: string;
  userinfo?: unknown;
};

export type ListViewRes = MainLayoutRes & {
  uniqueKeys: GetUniqueKeysReturns[];
  heading: string;
  resourceName: string;
  data: unknown[];
  meta: {
    [key: string]: any;
  };
};

export type DynamicCreateFormRes = MainLayoutRes & {
  fields: unknown[];
  heading: string;
  resourceName: string;
};

export type Service =
  | AuthorsService
  | CategoriesService
  | CustomersService
  | OrdersService
  | ProductsService
  | PublishersService
  | FeedbacksService;

export type CreateInputType = CreateAuthorInput &
  CreateCategoryInput &
  CreatePublisherInput &
  CreateProductInput &
  CreateCustomerInput &
  CreateFeedbackInput &
  CreateOrderInput;

export type UpdateInputType = UpdateAuthorInput &
  UpdateCategoryInput &
  UpdatePublisherInput &
  UpdateProductInput &
  UpdateCustomerInput &
  UpdateFeedbackInput &
  UpdateOrderInput;

export type EntityNames =
  | 'authors'
  | 'categories'
  | 'customers'
  | 'orders'
  | 'products'
  | 'publishers'
  | 'feedbacks';

export type DefaultCreateInputType = {
  authors: ReturnType<typeof DEFAULT_AUTHOR_CREATE_INPUT>;
  publishers: ReturnType<typeof DEFAULT_PUBLISHER_CREATE_INPUT>;
  categories: ReturnType<typeof DEFAULT_CATEGORY_CREATE_INPUT>;
};

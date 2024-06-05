import { UserinfoResponse } from 'openid-client';
import { AuthorsService } from 'src/authors/authors.service';
import {
  CreateAuthorInput,
  DEFAULT_AUTHOR_CREATE_INPUT,
} from 'src/authors/dto/create-author.input';
import { UpdateAuthorInput } from 'src/authors/dto/update-author.input';
import { CategoriesService } from 'src/categories/categories.service';
import {
  CreateCategoryInput,
  DEFAULT_CATEGORY_CREATE_INPUT,
} from 'src/categories/dto/create-category.input';
import { UpdateCategoryInput } from 'src/categories/dto/update-category.input';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';
import { UpdateCustomerInput } from 'src/customers/dto/update-customer.input';
import { CreateFeedbackInput } from 'src/feedbacks/dto/create-feedback.input';
import { UpdateFeedbackInput } from 'src/feedbacks/dto/update-feedback.input';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { CreateOrderInput } from 'src/orders/dto/create-order.input';
import { UpdateOrderInput } from 'src/orders/dto/update-order.input';
import { OrdersService } from 'src/orders/orders.service';
import {
  CreateProductInput,
  DEFAULT_PRODUCT_CREATE_INPUT,
} from 'src/products/dto/create-product.input';
import { UpdateProductInput } from 'src/products/dto/update-product.input';
import { ProductsService } from 'src/products/products.service';
import { ConfigsService } from '../configs/configs.service';
import {
  CreateConfigInput,
  DEFAULT_CONFIG_CREATE_INPUT,
} from '../configs/dto/create-config.input';
import { UpdateConfigInput } from '../configs/dto/update-config.input';

export type GetUniqueKeysReturns = {
  key: string;
  titleCase: string;
};

export type MainLayoutRes = {
  successMessage?: string;
  errorMessage?: string;
  userinfo?: UserinfoResponse;
  [key: string]: any;
};

export type ResourcePageRes = MainLayoutRes & {
  resourceName: string;
};

export type ListViewRes = ResourcePageRes & {
  uniqueKeys: GetUniqueKeysReturns[];
  heading: string;
  data: unknown[];
  meta: {
    [key: string]: any;
  };
  sort?: string | string[];
  order?: 'desc' | 'asc';
};

export type DynamicCreateFormRes = ResourcePageRes & {
  fields: unknown[];
  heading: string;
};

export type DetailPage = ResourcePageRes & {
  entityId: string;
  data: unknown;
};

export type Service =
  | AuthorsService
  | CategoriesService
  | CustomersService
  | OrdersService
  | ProductsService
  | FeedbacksService
  | ConfigsService;

export type CreateInputType = CreateAuthorInput &
  CreateCategoryInput &
  CreateProductInput &
  CreateCustomerInput &
  CreateFeedbackInput &
  CreateOrderInput &
  CreateConfigInput;

export type UpdateInputType = UpdateAuthorInput &
  UpdateCategoryInput &
  UpdateProductInput &
  UpdateCustomerInput &
  UpdateFeedbackInput &
  UpdateOrderInput &
  UpdateConfigInput;

export type EntityNames =
  | 'authors'
  | 'categories'
  | 'customers'
  | 'orders'
  | 'products'
  | 'feedbacks'
  | 'configs';

export type DefaultCreateInputType = {
  authors: ReturnType<typeof DEFAULT_AUTHOR_CREATE_INPUT>;
  categories: ReturnType<typeof DEFAULT_CATEGORY_CREATE_INPUT>;
  products: ReturnType<typeof DEFAULT_PRODUCT_CREATE_INPUT>;
  configs: ReturnType<typeof DEFAULT_CONFIG_CREATE_INPUT>;
};

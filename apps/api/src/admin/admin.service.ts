import { Injectable, Req } from '@nestjs/common';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { AuthorsService } from 'src/authors/authors.service';
import {
  CreateAuthorInput,
  DEFAULT_AUTHOR_CREATE_INPUT,
} from 'src/authors/dto/create-author.input';
import { CategoriesService } from 'src/categories/categories.service';
import {
  CreateCategoryInput,
  DEFAULT_CATEGORY_CREATE_INPUT,
} from 'src/categories/dto/create-category.input';
import {
  convertCamelCaseToTitleCase,
  getUniqueKeysFromTArray,
} from 'src/common/utils';
import { CustomersService } from 'src/customers/customers.service';
import { CreateCustomerInput } from 'src/customers/dto/create-customer.input';
import { CreateFeedbackInput } from 'src/feedbacks/dto/create-feedback.input';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { CreateOrderInput } from 'src/orders/dto/create-order.input';
import { OrdersService } from 'src/orders/orders.service';
import { CreateProductInput } from 'src/products/dto/create-product.input';
import { ProductsService } from 'src/products/products.service';
import {
  CreatePublisherInput,
  DEFAULT_PUBLISHER_CREATE_INPUT,
} from 'src/publishers/dto/create-publisher.input';
import { PublishersService } from 'src/publishers/publishers.service';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);

dayjs.tz.setDefault(dayjs.tz.guess());

type GetUniqueKeysReturns = {
  key: string;
  titleCase: string;
};

type MainLayoutRes = {
  errorMessage?: string;
  userinfo?: unknown;
};

type ListViewRes = MainLayoutRes & {
  uniqueKeys: GetUniqueKeysReturns[];
  heading: string;
  resourceName: string;
  data: unknown[];
};

type DynamicCreateFormRes = MainLayoutRes & {
  fields: unknown[];
  heading: string;
  resourceName: string;
};

type Service =
  | AuthorsService
  | CategoriesService
  | CustomersService
  | OrdersService
  | ProductsService
  | PublishersService
  | FeedbacksService;

type CreateInputType = CreateAuthorInput &
  CreateCategoryInput &
  CreatePublisherInput &
  CreateProductInput &
  CreateCustomerInput &
  CreateFeedbackInput &
  CreateOrderInput;

export type EntityNames =
  | 'authors'
  | 'categories'
  | 'customers'
  | 'orders'
  | 'products'
  | 'publishers'
  | 'feedbacks';

type DefaultCreateInputType = {
  authors: ReturnType<typeof DEFAULT_AUTHOR_CREATE_INPUT>;
  publishers: ReturnType<typeof DEFAULT_PUBLISHER_CREATE_INPUT>;
  categories: ReturnType<typeof DEFAULT_CATEGORY_CREATE_INPUT>;
};

@Injectable()
export class AdminService {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly categoriesService: CategoriesService,
    private readonly customersService: CustomersService,
    private readonly feedbacksService: FeedbacksService,
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService,
    private readonly publishersService: PublishersService,
  ) {}

  beautifyEntities(entities: unknown[]) {
    entities.forEach((record) => {
      Object.keys(record).forEach((prop) => {
        if (!['id', 'username', 'name'].includes(prop)) {
          delete record[prop];
          return;
        }
        if (!record[prop]) {
          record[prop] = 'null';
        }
        if (record['firstName'] && record['lastName']) {
          record['name'] = `${record['firstName']} ${record['lastName']}`;
        }
      });
      if (record['price']) {
        record['price'] = record['price'].toString();
      }
      if (record['createdAt']) {
        record['createdAt'] = dayjs(record['createdAt']).calendar();
      }
      if (record['updatedAt']) {
        record['updatedAt'] = dayjs(record['updatedAt']).calendar();
      }
    });
  }

  // https://stackoverflow.com/questions/44002447/building-dynamic-table-with-handlebars
  getUniqueKeys<T>(data: T[]): GetUniqueKeysReturns[] {
    return getUniqueKeysFromTArray(data).map((key) => ({
      key,
      titleCase: convertCamelCaseToTitleCase(key),
    }));
  }

  getServiceFromEntityName(entityName: EntityNames): Service {
    return this[`${entityName}Service`] as Service;
  }

  getDefaultCreateInput(entityName: EntityNames) {
    const defaultCreateInputs: DefaultCreateInputType = {
      authors: DEFAULT_AUTHOR_CREATE_INPUT(),
      publishers: DEFAULT_PUBLISHER_CREATE_INPUT(),
      categories: DEFAULT_CATEGORY_CREATE_INPUT(),
    };

    return defaultCreateInputs[entityName];
  }

  dynamicCreateForm(
    @Req() req,
    entityName: EntityNames,
  ): DynamicCreateFormRes | MainLayoutRes {
    const defaultCreateInput = this.getDefaultCreateInput(entityName);
    if (!defaultCreateInput) {
      return {
        errorMessage: 'Invalid entity name',
        userinfo: req?.user?.userinfo,
      };
    }
    const fields = Object.keys(defaultCreateInput).map((key) => ({
      key: key,
      type: typeof defaultCreateInput[key], ///////////
      title: convertCamelCaseToTitleCase(key),
    }));
    return {
      fields,
      heading: `Create ${convertCamelCaseToTitleCase(entityName)}`,
      resourceName: entityName,
      userinfo: req?.user?.userinfo,
    };
  }

  async listRes(
    @Req() request,
    entityName: EntityNames,
  ): Promise<ListViewRes | MainLayoutRes> {
    const entityService = this.getServiceFromEntityName(entityName);

    let entityRecords;
    let errorMessage = '';
    try {
      entityRecords = await entityService.findAll();
      this.beautifyEntities(entityRecords);
    } catch (error) {
      errorMessage = `Failed to fetch ${entityName} records`;
      console.error(`${errorMessage}:`, error);
      return {
        errorMessage,
        userinfo: request.user?.userinfo,
      };
    }

    let uniqueKeys;
    try {
      uniqueKeys = this.getUniqueKeys(entityRecords);
    } catch (error) {
      errorMessage = `Failed to get unique keys for ${entityName} records`;
      console.error(`${errorMessage}:`, error);
      return {
        errorMessage,
        userinfo: request.user?.userinfo,
      };
    }

    return {
      heading: convertCamelCaseToTitleCase(entityName),
      resourceName: entityName,
      uniqueKeys,
      data: entityRecords,
      userinfo: request.user?.userinfo,
    };
  }

  async createEntity(
    @Req() request,
    entityName: EntityNames,
    createInput: CreateInputType,
  ) {
    const entityService = this.getServiceFromEntityName(entityName);
    try {
      const created = await entityService.create(createInput);
      return created;
    } catch (error) {
      console.error(error);
    }
  }

  async getEntityDetails(@Req() request, entityName: EntityNames, id: string) {
    const entityService = this.getServiceFromEntityName(entityName);
    try {
      const entity = await entityService.findOne(id);

      return Object.fromEntries(
        Object.entries(entity).map(([key, value]) => [
          key,
          !value ? 'null' : `${value}`,
        ]),
      );
    } catch (error) {
      console.error(error);
    }
  }
}

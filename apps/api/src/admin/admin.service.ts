import { Injectable, Req } from '@nestjs/common';
import { AuthorsService } from 'src/authors/authors.service';
import { CategoriesService } from 'src/categories/categories.service';
import { CustomersService } from 'src/customers/customers.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';
import { PublishersService } from 'src/publishers/publishers.service';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { convertCamelCaseToTitleCase } from 'src/common/utils';
import * as _ from 'lodash';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);

dayjs.tz.setDefault(dayjs.tz.guess());

type GetUniqueKeysReturns = {
  key: string;
  titleCase: string;
};

type ListViewRes = {
  uniqueKeys: GetUniqueKeysReturns[];
  heading: string;
  resourceName: string;
  data: unknown[];
  userinfo?: unknown;
};

type Service =
  | AuthorsService
  | CategoriesService
  | CustomersService
  | OrdersService
  | ProductsService
  | PublishersService;

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
        if (record['firstName'] && record['lastName']) {
          record['name'] = `${record['firstName']} ${record['lastName']}`;
        }
        if (
          [
            'description',
            'accountId',
            'updatedAt',
            'createdAt',
            'displayName',
            'phoneNumber',
            'salePrice',
            'firstName',
            'lastName',
            'website',
            'gender',
          ].includes(prop)
        ) {
          delete record[prop];
        } else if (!record[prop]) {
          record[prop] = 'null';
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
    return _.uniq(_.flatMap(data, (obj) => Object.keys(obj))).map((key) => ({
      key,
      titleCase: convertCamelCaseToTitleCase(key),
    }));
  }

  async listRes(@Req() request, entityName: string): Promise<ListViewRes> {
    const entityService = this[`${entityName}Service`] as Service;

    let entityRecords;
    try {
      entityRecords = await entityService.findAll();
      this.beautifyEntities(entityRecords);
    } catch (error) {
      console.error(`Failed to fetch ${entityName} records:`, error);
      throw new Error(`Failed to fetch ${entityName} records`);
    }

    let uniqueKeys;
    try {
      uniqueKeys = this.getUniqueKeys(entityRecords);
    } catch (error) {
      console.error(
        `Failed to get unique keys for ${entityName} records:`,
        error,
      );
      throw new Error(`Failed to get unique keys for ${entityName} records`);
    }

    return {
      heading: convertCamelCaseToTitleCase(entityName),
      resourceName: entityName,
      uniqueKeys,
      data: entityRecords,
      userinfo: request.user?.userinfo,
    };
  }
}

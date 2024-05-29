import { Injectable, Req, Res } from '@nestjs/common';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { AuthorsService } from 'src/authors/authors.service';
import { DEFAULT_AUTHOR_CREATE_INPUT } from 'src/authors/dto/create-author.input';
import { CategoriesService } from 'src/categories/categories.service';
import { DEFAULT_CATEGORY_CREATE_INPUT } from 'src/categories/dto/create-category.input';
import {
  convertCamelCaseToTitleCase,
  getUniqueKeysFromTArray,
} from 'src/common/utils';
import { CustomersService } from 'src/customers/customers.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { OrdersService } from 'src/orders/orders.service';
import { ProductsService } from 'src/products/products.service';

import { DEFAULT_PRODUCT_CREATE_INPUT } from 'src/products/dto/create-product.input';
import {
  CreateInputType,
  DefaultCreateInputType,
  DynamicCreateFormRes,
  EntityNames,
  GetUniqueKeysReturns,
  ListViewRes,
  MainLayoutRes,
  Service,
  UpdateInputType,
} from './admin.type';
import { Request } from 'express';
import { ConfigsService } from 'src/configs/configs.service';
import { DEFAULT_CONFIG_CREATE_INPUT } from 'src/configs/dto/create-config.input';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(calendar);

dayjs.tz.setDefault(dayjs.tz.guess());

@Injectable()
export class AdminService {
  constructor(
    private readonly authorsService: AuthorsService,
    private readonly categoriesService: CategoriesService,
    private readonly customersService: CustomersService,
    private readonly feedbacksService: FeedbacksService,
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService,
    private readonly configsService: ConfigsService,
  ) {}

  beautifyEntities<T>(entities: T[]) {
    entities.forEach((record) => {
      this.beautifyEntity(record);
    });
    return entities;
  }

  beautifyEntity<T>(record: T) {
    if (record?.['firstName'] && record?.['lastName']) {
      record['name'] = `${record['firstName']} ${record['lastName']}`;
    }
    if (record['createdAt']) {
      record['createdAt'] = dayjs(record['createdAt']).calendar();
    }
    if (record['updatedAt']) {
      record['updatedAt'] = dayjs(record['updatedAt']).calendar();
    }
    return record;
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
      categories: DEFAULT_CATEGORY_CREATE_INPUT(),
      products: DEFAULT_PRODUCT_CREATE_INPUT(),
      configs: DEFAULT_CONFIG_CREATE_INPUT(),
    };

    return defaultCreateInputs[entityName];
  }

  getFieldsFromEntity<T>(obj: T) {
    return Object.keys(obj).map((key) => ({
      key: key,
      type: typeof obj[key],
      title: convertCamelCaseToTitleCase(key),
      value: obj[key],
    }));
  }

  filterFieldsFromEntity<T>(
    object: T,
    fields: string[] = ['id', 'createdAt', 'updatedAt'],
    exclude: boolean = true,
  ) {
    Object.keys(object).forEach((key) => {
      if (exclude ? fields.includes(key) : !fields.includes(key)) {
        delete object[key];
      }
    });
    return object;
  }

  parseNumberOfEntity<T>(object: T) {
    Object.keys(object).forEach((key) => {
      if (object[key] && !isNaN(object[key])) {
        object[key] = Number(object[key]);
      }
    });
    return object;
  }

  dynamicCreateForm(
    @Req() req: Request,
    entityName: EntityNames,
  ): DynamicCreateFormRes | MainLayoutRes {
    const defaultCreateInput = this.getDefaultCreateInput(entityName);
    if (!defaultCreateInput) {
      return {
        errorMessage: 'Invalid entity name',
        userinfo: req?.user?.userinfo,
      };
    }
    const fields = this.getFieldsFromEntity(defaultCreateInput);
    return {
      fields,
      heading: `Create ${convertCamelCaseToTitleCase(entityName)}`,
      resourceName: entityName,
      userinfo: req?.user?.userinfo,
    };
  }

  async listRes(
    @Req() req: Request,
    entityName: EntityNames,
    page: number,
    perPage: number,
    successMessage: string,
  ): Promise<ListViewRes | MainLayoutRes> {
    const entityService = this.getServiceFromEntityName(entityName);

    let paginatedRes;
    let entityRecords;
    let errorMessage = '';
    try {
      paginatedRes = await entityService.paginatedFindAll({
        page,
        perPage,
      });
      entityRecords = paginatedRes.data;
      entityRecords.forEach((record) => {
        this.filterFieldsFromEntity(
          this.beautifyEntity(record),
          ['id', 'name', 'email', 'key'],
          false,
        );
      });
    } catch (error) {
      errorMessage = `Failed to fetch ${entityName} records`;
      console.error(`${errorMessage}:`, error);
      return {
        errorMessage,
        userinfo: req.user?.userinfo,
        resourceName: entityName,
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
        userinfo: req.user?.userinfo,
      };
    }

    return {
      heading: convertCamelCaseToTitleCase(entityName),
      resourceName: entityName,
      uniqueKeys,
      data: entityRecords,
      meta: paginatedRes.meta,
      userinfo: req.user?.userinfo,
      successMessage: successMessage ? decodeURIComponent(successMessage) : '',
    };
  }

  async createEntity(
    @Req() req: Request,
    @Res() res,
    entityName: EntityNames,
    createInput: CreateInputType,
  ) {
    const fields = this.getFieldsFromEntity(createInput);
    try {
      const entityService = this.getServiceFromEntityName(entityName);
      const created = await entityService.create(createInput);
      if (!created) {
        return {
          fields,
          resourceName: entityName,
          userinfo: req?.user?.userinfo,
          errorMessage: `Failed to create record`,
        };
      }

      const uniqueProp =
        (created as { key?: string; id?: string }).key ??
        (created as { id?: string }).id;

      const successMessage = encodeURIComponent(
        `Successfully created ${entityName}/${uniqueProp}!`,
      );
      res.redirect(
        `/admin/${entityName}/${uniqueProp}?successMessage=${successMessage}`,
      );
      return;
    } catch (error) {
      console.error(error);
      return {
        fields,
        resourceName: entityName,
        userinfo: req?.user?.userinfo,
        errorMessage: `Failed to create record: ${error.message}`,
      };
    }
  }

  async editEntity(
    @Req() req: Request,
    @Res() res,
    editInput: UpdateInputType,
    entityName: EntityNames,
    id: string,
  ) {
    this.filterFieldsFromEntity(editInput, [
      'id',
      'key',
      'createdAt',
      'updatedAt',
    ]);
    this.parseNumberOfEntity(editInput);
    try {
      const entityService = this.getServiceFromEntityName(entityName);
      const updated = await entityService.update(id, editInput);
      if (!updated) {
        return {
          data: editInput,
          resourceName: entityName,
          userinfo: req?.user?.userinfo,
          errorMessage: `Failed to update record`,
        };
      }
      const successMessage = encodeURIComponent(`Updated ${entityName}/${id}!`);
      res.redirect(
        `/admin/${entityName}/${id}/edit?successMessage=${successMessage}`,
      );
      return;
    } catch (error) {
      console.error(error);
      return {
        data: editInput,
        resourceName: entityName,
        userinfo: req?.user?.userinfo,
        errorMessage: `Failed to update record: ${error.message}`,
      };
    }
  }

  async getEntityDetails(
    @Req() req: Request,
    entityName: EntityNames,
    id: string,
  ): Promise<ReturnType<Service['findOne']>> {
    const entityService = this.getServiceFromEntityName(entityName);
    try {
      const entity = await entityService.findOne(id);
      return this.beautifyEntity(entity);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteEntity(
    @Req() req: Request,
    @Res() res,
    entityName: EntityNames,
    id: string,
    from: string,
  ) {
    const entityService = this.getServiceFromEntityName(entityName);
    try {
      const deleted = await entityService.remove(id);
      if (!deleted) {
        return {
          resourceName: entityName,
          userinfo: req.user?.userinfo,
          errorMessage: `Failed to delete record`,
        };
      }
      const uniqueProp =
        (deleted as { key?: string; id?: string }).key ??
        (deleted as { id?: string }).id;
      const successMessage = `Successfully deleted ${entityName}/${uniqueProp}!`;
      const params = new URLSearchParams({
        from,
        successMessage,
      });
      return res.redirect(`/admin/${entityName}?${params.toString()}`);
    } catch (error) {
      console.error(error);
      return {
        resourceName: entityName,
        userinfo: req.user?.userinfo,
        errorMessage: `Failed to delete record: ${error.message}`,
      };
    }
  }
}

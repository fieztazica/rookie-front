import { Body, Injectable, Req, Res } from '@nestjs/common';
import { OrderStatus } from '@prisma/client';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { Request } from 'express';
import { AuthorsService } from 'src/authors/authors.service';
import { DEFAULT_AUTHOR_CREATE_INPUT } from 'src/authors/dto/create-author.input';
import { CategoriesService } from 'src/categories/categories.service';
import { DEFAULT_CATEGORY_CREATE_INPUT } from 'src/categories/dto/create-category.input';
import {
  convertCamelCaseToTitleCase,
  getUniqueKeysFromTArray,
} from 'src/common/utils';
import { ConfigsService } from 'src/configs/configs.service';
import { DEFAULT_CONFIG_CREATE_INPUT } from 'src/configs/dto/create-config.input';
import { CustomersService } from 'src/customers/customers.service';
import { FeedbacksService } from 'src/feedbacks/feedbacks.service';
import { OrdersService } from 'src/orders/orders.service';
import {
  CreateProductInput,
  DEFAULT_PRODUCT_CREATE_INPUT,
} from 'src/products/dto/create-product.input';
import { ProductsService } from 'src/products/products.service';
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
      type: Array.isArray(obj[key]) ? 'array' : typeof obj[key],
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

  async dynamicCreateForm(
    @Req() req: Request,
    entityName: EntityNames,
    errorFields?: string,
    errorMessage?: string,
  ): Promise<DynamicCreateFormRes | MainLayoutRes> {
    let additional = {};
    const defaultCreateInput = this.getDefaultCreateInput(entityName);
    if (!defaultCreateInput) {
      return {
        errorMessage: 'Invalid entity name',
        userinfo: req?.user?.userinfo,
      };
    }
    if (entityName === 'products') {
      additional = {
        authors: await this.authorsService.findAll({
          select: {
            id: true,
            firstName: true,
            lastName: true,
          },
        }),
        categories: await this.categoriesService.findAll({
          select: {
            id: true,
            name: true,
            displayName: true,
          },
        }),
      };
    }
    const fields = this.getFieldsFromEntity(defaultCreateInput);
    if (errorFields) {
      const errorFieldsJson = JSON.parse(decodeURIComponent(errorFields));
      fields.forEach((field) => {
        field['value'] = errorFieldsJson.find(
          (f) => f.key === field.key,
        )?.value;
      });
    }
    return {
      fields,
      heading: `Create ${convertCamelCaseToTitleCase(entityName)}`,
      resourceName: entityName,
      userinfo: req?.user?.userinfo,
      additional,
      errorMessage: errorMessage ? decodeURIComponent(errorMessage) : undefined,
    };
  }

  updateQueryString(@Req() req: Request, name: string, value: string) {
    const params = new URLSearchParams(req.query.toString());
    params.set(name, value);
    return params.toString();
  }

  updateMultiQueryString(
    @Req() req: Request,
    queries: { name: string; value: string }[] | Record<string, string>,
  ) {
    const params = new URLSearchParams(JSON.parse(JSON.stringify(req.query)));
    if (Array.isArray(queries)) {
      for (const query of queries) {
        params.set(query.name, query.value);
      }
    } else {
      for (const name in queries) {
        params.set(name, queries[name]);
      }
    }
    console.log(params);
    return params.toString();
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

  async orderListRes(
    @Req() req: Request,
    page: number,
    perPage: number,
    successMessage: string,
    sort: string = 'createdAt',
    order: 'desc' | 'asc' = 'desc',
    orderId?: string,
  ): Promise<ListViewRes | MainLayoutRes> {
    const entityService = this.ordersService;

    let paginatedRes;
    let entityRecords;
    let errorMessage = '';
    let orderItems = [];
    try {
      paginatedRes = await entityService.paginatedFindAll(
        {
          page,
          perPage,
        },
        {
          orderBy: {
            [sort]: order,
          },
        },
      );
      entityRecords = paginatedRes.data;
      entityRecords.forEach((record) => {
        this.filterFieldsFromEntity(
          this.beautifyEntity(record),
          ['id', 'total', 'status', 'createdAt'],
          false,
        );
      });
    } catch (error) {
      errorMessage = `Failed to fetch orders records`;
      console.error(`${errorMessage}:`, error);
      return {
        errorMessage,
        userinfo: req.user?.userinfo,
        resourceName: 'orders',
      };
    }

    let uniqueKeys;
    try {
      uniqueKeys = this.getUniqueKeys(entityRecords);
    } catch (error) {
      errorMessage = `Failed to get unique keys for orders records`;
      console.error(`${errorMessage}:`, error);
      return {
        errorMessage,
        userinfo: req.user?.userinfo,
      };
    }

    const searchParams = new URLSearchParams({
      page: page.toString(),
      perPage: perPage.toString(),
      sort,
      order,
    });

    if (orderId) {
      orderItems = await this.ordersService.getOrderItems(orderId);
    }

    return {
      heading: convertCamelCaseToTitleCase('orders'),
      resourceName: 'orders',
      uniqueKeys,
      data: entityRecords,
      meta: paginatedRes.meta,
      userinfo: req.user?.userinfo,
      successMessage: successMessage ? decodeURIComponent(successMessage) : '',
      order,
      sort,
      orderItems,
      orderId,
      searchParams: searchParams.toString(),
    };
  }

  async updateOrderStatus(orderId: string, status: keyof typeof OrderStatus) {
    return await this.ordersService.update(orderId, {
      id: orderId,
      status: OrderStatus[status],
    });
  }

  async getCreateInputFromBody(
    @Body() body,
    entityName?: EntityNames,
  ): Promise<CreateInputType> {
    if (!entityName) return body as CreateInputType;
    switch (entityName) {
      case 'products':
        const categoriesBody = Array.isArray(body.categories)
          ? ([...body.categories] as string[])
          : [body.categories as string];
        const authorsBody = Array.isArray(body.authors)
          ? ([...body.authors] as string[])
          : [body.authors as string];
        body = {
          ...body,
          categories: {
            createMany: {
              data: categoriesBody.map((categoryId) => ({ categoryId })),
            },
          },
          authors: {
            createMany: {
              data: authorsBody.map((authorId) => ({
                authorId,
              })),
            },
          },
        } satisfies CreateProductInput;
        for (const key in body) {
          if (!isNaN(parseFloat(body[key]))) {
            body[key] = parseFloat(body[key]);
          }
          if (!isNaN(parseInt(body[key]))) {
            body[key] = parseInt(body[key]);
          }
        }
        console.log(body);
        break;
      default:
        break;
    }
    return body as CreateInputType;
  }

  async createEntity(
    @Req() req: Request,
    @Res() res,
    entityName: EntityNames,
    @Body() body,
  ) {
    const fields = this.getFieldsFromEntity(body);
    try {
      const entityService = this.getServiceFromEntityName(entityName);
      const createInput = await this.getCreateInputFromBody(body, entityName);
      const created = await entityService.create(createInput);
      const uniqueProp =
        (created as { key?: string; id?: string }).key ??
        (created as { id?: string }).id;

      const successMessage = encodeURIComponent(
        `Successfully created ${entityName}/${uniqueProp}!`,
      );
      return res.redirect(
        `/admin/${entityName}/${uniqueProp}?successMessage=${successMessage}`,
      );
    } catch (error) {
      console.error(error);
      const searchParams = new URLSearchParams({
        errorMessage: encodeURIComponent(
          `Failed to create record: ${error.message}`,
        ),
        fields: encodeURIComponent(JSON.stringify(fields)),
      });
      return res.redirect(
        `/admin/${entityName}/create?${searchParams.toString()}`,
      );
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
      await entityService.update(id, editInput);
      const successMessage = encodeURIComponent(`Updated ${entityName}/${id}!`);
      return res.redirect(
        `/admin/${entityName}/${id}/edit?successMessage=${successMessage}`,
      );
    } catch (error) {
      console.error(error);
      const searchParams = new URLSearchParams({
        errorMessage: encodeURIComponent(
          `Failed to update record: ${error.message}`,
        ),
      });
      return res.redirect(
        `/admin/${entityName}/${id}/edit?${searchParams.toString()}`,
      );
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

  async getAbout() {
    const result = await this.configsService.getOrSet('about', '');
    return result;
  }

  async setAbout(content: string) {
    return await this.configsService.set('about', content);
  }
}

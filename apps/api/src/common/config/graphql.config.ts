import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { IContext } from './interfaces/context.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphQLConfig implements GqlOptionsFactory {
  private readonly testing: boolean;

  constructor(private readonly configService: ConfigService) {
    this.testing = this.configService.get('testing');
  }

  public createGqlOptions(): ApolloDriverConfig {
    return {
      driver: ApolloDriver,
      context: ({ req, res }): IContext => ({
        req,
        res,
      }),
      path: '/api/graphql',
      autoSchemaFile: '~schema.gql',
      sortSchema: true,
      playground: this.testing,
      introspection: true,
    };
  }
}

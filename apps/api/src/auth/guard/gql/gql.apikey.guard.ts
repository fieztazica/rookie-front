import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ApiKeyGuard } from '../apikey.guard';

@Injectable()
export class GqlApiKeyAuthGuard extends ApiKeyGuard {
  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context);
    const { req } = ctx.getContext();
    return req;
  }
}

// https://medium.com/@gabrielkochfodi/jwt-passport-authentication-with-nest-js-graphql-and-bcryptjs-1a9cf8c7ff8a

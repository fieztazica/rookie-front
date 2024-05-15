import { SetMetadata, UseFilters, UseGuards } from '@nestjs/common';
import { applyDecorators } from '@nestjs/common';
import { AuthenticatedGuard } from '../guard/authenticated.guard';
import { ViewAuthFilter } from '../filter/viewAuth.filter';

export const RedirectAuth = (...args: string[]) =>
  applyDecorators(
    SetMetadata('redirectAuth', args),
    UseGuards(AuthenticatedGuard),
    UseFilters(ViewAuthFilter),
  );

import {
  applyDecorators,
  SetMetadata,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ViewAuthFilter } from '../filter/viewAuth.filter';
import { AuthenticatedGuard } from '../guard/authenticated.guard';
import { Roles } from './roles.decorator';
import { Role } from '../enum/role.enum';

export const RedirectAuth = (...args: string[]) =>
  applyDecorators(
    SetMetadata('redirectAuth', args),
    UseGuards(AuthenticatedGuard),
    Roles(Role.Admin),
    UseFilters(ViewAuthFilter),
  );

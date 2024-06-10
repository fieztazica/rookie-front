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
import { RolesGuard } from '../guard/roles.guard';

export const RedirectAuth = (...args: string[]) =>
  applyDecorators(
    SetMetadata('redirectAuth', args),
    UseGuards(AuthenticatedGuard),
    UseGuards(RolesGuard),
    Roles(Role.Admin),
    UseFilters(ViewAuthFilter),
  );

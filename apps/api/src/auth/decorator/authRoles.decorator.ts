import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { AuthenticatedGuard } from '../guard/authenticated.guard';
import { Roles } from './roles.decorator';
import { Role } from '../enum/role.enum';

export const AuthRoles = (...args: Role[]) =>
  applyDecorators(
    SetMetadata('authRoles', args),
    UseGuards(AuthenticatedGuard),
    Roles(...args),
  );

import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Role } from '../enum/role.enum';
import { AuthenticatedGuard } from '../guard/authenticated.guard';
import { Roles } from './roles.decorator';
import { GqlJwtAuthGuard } from '../guard/gql.jwt.guard';
import { JwtAuthGuard } from '../guard/jwt.guard';

export const AuthRoles = (...args: Role[]) =>
  applyDecorators(
    SetMetadata('authRoles', args),
    UseGuards(AuthenticatedGuard),
    Roles(...args),
  );

export const UseGqlAuthRoles = (...args: Role[]) =>
  applyDecorators(UseGuards(GqlJwtAuthGuard), AuthRoles(...args));

export const UseAuthRoles = (...args: Role[]) =>
  applyDecorators(UseGuards(JwtAuthGuard), AuthRoles(...args));

import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Role } from '../enum/role.enum';
import { Roles } from './roles.decorator';
import { GqlMixedAuthGuard } from '../guard/gql/gql.mixed.guard';
import { MixedAuthGuard } from '../guard/mixed.guard';
import { AuthenticatedGuard } from '../guard/authenticated.guard';
import { RolesGuard } from '../guard/roles.guard';
import { GqlRolesGuard } from '../guard/gql/gql.roles.guard';

export const AuthRoles = (...args: Role[]) =>
  applyDecorators(
    SetMetadata('authRoles', args),
    UseGuards(AuthenticatedGuard, RolesGuard),
    Roles(...args),
  );

export const UseGqlAuthRoles = (...args: Role[]) =>
  applyDecorators(
    SetMetadata('gqpMixedAuthRoles', args),
    UseGuards(GqlMixedAuthGuard, GqlRolesGuard),
    Roles(...args),
  );

export const UseAuthRoles = (...args: Role[]) =>
  applyDecorators(
    SetMetadata('mixedAuthRoles', args),
    UseGuards(MixedAuthGuard, RolesGuard),
    Roles(...args),
  );

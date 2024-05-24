import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles } from '../decorator/roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get(Roles, context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const userRoles = request?.user?.userinfo?.userRoles;
    if (!userRoles) {
      return false;
    }

    const matchRoles = (roles: string[], userRoles: string[]) => {
      return roles.some((role) => userRoles.includes(role));
    };

    return matchRoles(roles, userRoles);
  }
}

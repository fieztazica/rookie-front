import { Request } from 'express';
import { PaginateFunction } from 'prisma-pagination';
import { UserinfoResponse } from 'openid-client';

declare global {
    namespace Express {
        export interface Request {
            paginate: PaginateFunction;
            user?: {
                id_token: string;
                access_token: string;
                refresh_token: string;
                userinfo?: UserinfoResponse & {
                    userRoles?: string[];
                };
            };
        }
    }
}

import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class MixedAuthGuard extends AuthGuard(['api-key', 'jwt']) {}

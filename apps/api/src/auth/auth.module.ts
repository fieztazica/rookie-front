import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { buildOpenIdClient, OidcStrategy } from './strategy/oidc.strategy';
import { PassportModule } from '@nestjs/passport';
import { SessionSerializer } from './serializer/session.serializer';

const OidcStrategyFactory = {
  provide: 'OidcStrategy',
  useFactory: async (authService: AuthService) => {
    const client = await buildOpenIdClient(); // secret sauce! build the dynamic client before injecting it into the strategy for use in the constructor super call.
    const strategy = new OidcStrategy(authService, client);
    return strategy;
  },
  inject: [AuthService],
};

@Module({
  imports: [
    PassportModule.register({ session: true, defaultStrategy: 'oidc' }),
  ],
  controllers: [AuthController],
  providers: [OidcStrategyFactory, SessionSerializer, AuthService],
})
export class AuthModule {}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';
import { AuthService } from 'src/Authentication/auth.service';
import { Request } from 'express';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private receivedToken;

  constructor(private authService: AuthService) {
    super({
      // usernameField: 'username',
      ignoreExpiration: false,
      secretOrKey: 'Secret',
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: Request) => {
          const data = request?.cookies['refresh_token'];

          if (!data) {
            return null;
          }

          this.receivedToken = data;
          console.log(data);
          return data;
        },
      ]),
    });
  }

  async validate(
    username: string,
    password: string,
    req: Request,
  ): Promise<any> {
    console.log('q da vidim ' + this.receivedToken);

    const user = await this.authService.validateUser(username, password);

    if (!user) {
      console.log('no user');
      throw new UnauthorizedException();
    }
    return user;
  }
}

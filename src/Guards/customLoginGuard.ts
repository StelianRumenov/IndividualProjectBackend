import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/Authentication/auth.service';

@Injectable()
export class CustomLoginGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
    private authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const username = request.body.username;
    const password = request.body.password;

    if (username && password) {
      const user = await this.authService.validateUser(username, password);
      if (!user) {
        throw new UnauthorizedException('Invalid username or password');
      }
      request.user = user;
      return true;
    }

    // If username and password are missing, check for token
    // const token = request.cookie['authorization'];
    if (request.cookies.refresh_token) {
      const token = request.cookies.refresh_token;
      const decoded = this.jwtService.verify(token);
      const username = decoded.username;
      const password = decoded.password;

      console.log(token);
      console.log(username, password);

      const user = await this.authService.validateUser(username, password);
      if (!user) {
        throw new UnauthorizedException('Invalid username or password');
      }
      request.user = user;
      return true;
    }

    throw new UnauthorizedException('Missing credentials');
  }
}

import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './Authentication/auth.service';
import { JwtAuthGuard } from './Guards/jwt.guard';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginGuard } from './Guards/login.guard';

@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  // @UseGuards(LoginGuard)
  // @Post('auth/login')
  // async login(@Request() req) {
  //   return this.authService.login(req.user);
  // }

  @UseGuards(JwtAuthGuard)
  @Get('auth/profile')
  getProfile(@Request() req): any {
    return req.user;
  }
}

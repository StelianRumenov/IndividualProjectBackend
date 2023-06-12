import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './Authentication/auth.service';
import { ProductService } from './Entities/Product/product.service';
import { JwtAuthGuard } from './Guards/jwt.guard';
// import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LoginGuard } from './Guards/login.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

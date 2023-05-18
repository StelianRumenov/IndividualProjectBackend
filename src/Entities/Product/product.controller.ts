import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guards/jwt.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<any> {
    return this.productService.getAll();
  }
}

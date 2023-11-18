import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guards/jwt.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @UseGuards(JwtAuthGuard)
  @Get()
  getAll(): Promise<any> {
    return this.productService.getAll();
  }
  @Post('/addTransaction')
  addTransaction(@Body() data: any): Promise<any> {
    return this.productService.addTransBulk(data);
  }

  @Get('/getTransaction')
  getTransactions(@Body() data: any): Promise<any> {
    return this.productService.getTransactions(data);
  }

  @Post('/addBulk')
  addBulk(@Body() data: any): Promise<any> {
    return this.productService.addProductBulk(data);
  }

  @Get('/getAllPrice')
  getByPrice(@Body('price') data: any): Promise<any> {
    return this.productService.getProductByPrice(data);
  }
}

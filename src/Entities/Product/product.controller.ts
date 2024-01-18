import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/Guards/jwt.guard';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // @UseGuards(JwtAuthGuard)
  @Get('/getProducts')
  getAll(): Promise<any> {
    return this.productService.getAll();
  }

  @Post('/addBulk')
  addBulk(@Body() data: any): Promise<any> {
    return this.productService.addProductBulk(data);
  }

  @Post('/addProduct')
  addProduct(@Body() data: any): Promise<any> {
    return this.productService.addProduct(data);
  }

  @Get('/getProduct')
  getProductById(@Body('id') data: any): Promise<any> {
    return this.productService.getProductById(data);
  }

  @Get('/getAllPrice')
  getByPrice(@Body('price') data: any): Promise<any> {
    return this.productService.getProductByPrice(data);
  }
}

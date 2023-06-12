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

  @Get('getTen')
  getTen(): Promise<any> {
    return this.productService.getFirstTen();
  }

  @Get('getHundred')
  getHundred(): Promise<any> {
    return this.productService.getFirstHundred();
  }
  @Get('getThousand')
  getThousand(): Promise<any> {
    return this.productService.getThousand();
  }

  @Post('/addBulk')
  addBulk(@Body() data: any): Promise<any> {
    return this.productService.addProductBulk(data);
  }

  @Get('/getAllPrice')
  getByPrice(@Body('price') data: any): Promise<any> {
    return this.productService.getProductByPrice(data);
  }
  @Get('/getHundredPrice')
  getByPriceHundred(@Body('price') data: any): Promise<any> {
    return this.productService.getProductByPriceHundred(data);
  }
  @Get('/getThousandPrice')
  getByPriceThousand(@Body('price') data: any): Promise<any> {
    return this.productService.getProductByPriceThousand(data);
  }
}

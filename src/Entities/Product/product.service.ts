import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './DTO/createProduct.dto';
import { DeleteProductDto } from './DTO/deleteProduct.dto';
import { ProductEntity } from './product.entity';

export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepo: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }

  async addProduct(data: CreateProductDto): Promise<any> {
    const newProduct = this.productRepo.create({
      ...data,
      // createdAt: new Date(),
    });
    return await this.productRepo.save(newProduct);
  }

  async deleteProduct(data: DeleteProductDto): Promise<any> {
    return await this.productRepo.delete({ id: data.id });
  }
}

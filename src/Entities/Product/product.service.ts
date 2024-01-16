import { InjectRepository } from '@nestjs/typeorm';
import { take } from 'rxjs';
import { Repository } from 'typeorm';
import { Transaction } from '../Transaction/transaction.entity';
import { UserEntity } from '../User/user.entity';
import { CreateProductDto } from './DTO/createProduct.dto';
import { DeleteProductDto } from './DTO/deleteProduct.dto';
import { ProductEntity } from './product.entity';

export class ProductService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
    @InjectRepository(Transaction)
    private transRepo: Repository<Transaction>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepo.find();
  }

  async getProductById(id: string): Promise<ProductEntity> {
    return await this.productRepo.findOne({ where: { id } });
  }

  async getProductByPrice(price: number): Promise<any> {
    return await this.productRepo.find({ where: { price } });
  }

  async getProductByPriceHundred(price: number): Promise<any> {
    return await this.productRepo.find({ where: { price }, take: 100 });
  }

  async getProductByPriceThousand(price: number): Promise<any> {
    return await this.productRepo.find({ where: { price }, take: 1000 });
  }

  async addProduct(data: CreateProductDto): Promise<any> {
    const newProduct = this.productRepo.create({
      ...data,
    });
    return await this.productRepo.save(newProduct);
  }

  async deleteProduct(data: DeleteProductDto): Promise<any> {
    return await this.productRepo.delete({ id: data.id });
  }

  async addProductBulk(data: any): Promise<any> {
    console.log(data);
    const newProducts = data.map((item) => this.productRepo.create(item));
    return await this.productRepo.save(newProducts);
  }

  // async addTransBulk(data: any[]): Promise<any> {
  //   // console.log(data);
  //   const newTrans = [];

  //   for (const item of data) {
  //     const { userId, productId, total } = item;

  //     // Fetch the user and product entities
  //     const user = await this.userRepository.findOneBy({ id: userId });
  //     const product = await this.productRepo.findOneBy({ id: productId });

  //     // Create a new transaction entity and set the user and product
  //     const transaction = this.transRepo.create({
  //       user,
  //       product,
  //       total,
  //       // Add other transaction properties from 'item' if applicable
  //     });

  //     newTrans.push(transaction);
  //   }

  //   console.log(newTrans);
  //   return await this.transRepo.save(newTrans);
  // }

  // async getTransactions(data: any): Promise<any> {
  //   const { userId } = data;
  //   return await this.transRepo.find({ where: { user: { id: userId } } });
  // }
}

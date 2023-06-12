import { forwardRef, Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import { FactoryModule } from 'src/Factory/factory.module';
import { ProductEntity } from './product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductsResolver } from './product.resolver';
import { Transaction } from '../Transaction/transaction.entity';
import { UserEntity } from '../User/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, Transaction, UserEntity])],
  controllers: [ProductController],
  providers: [ProductService, ProductsResolver],
  exports: [ProductService],
})
export class ProductModule {}

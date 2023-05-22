import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductDto } from './DTO/createProduct.dto';
import { DeleteProductDto } from './DTO/deleteProduct.dto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Resolver((of) => ProductEntity)
export class ProductsResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => [ProductEntity])
  products(): Promise<ProductEntity[]> {
    return this.productService.getAll();
  }

  @Query((returns) => ProductEntity, { nullable: true })
  product(@Args('id', { type: () => ID }) id: string): Promise<ProductEntity> {
    return this.productService.getProduct(id);
  }

  @Mutation(() => ProductEntity)
  addProduct(
    @Args('createProductInput') createProductInput: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.addProduct(createProductInput);
  }

  @Mutation(() => ProductEntity, { nullable: true })
  deleteProduct(
    @Args('deleteProductInput') deleteProductInput: DeleteProductDto,
  ): Promise<ProductEntity | void> {
    return this.productService
      .deleteProduct(deleteProductInput)
      .then((result) => console.log(result));
  }

  @Mutation(() => ProductEntity, { nullable: true })
  updateProduct(
    @Args('deleteProductInput') deleteProductInput: DeleteProductDto,
  ): Promise<ProductEntity | void> {
    return this.productService
      .deleteProduct(deleteProductInput)
      .then((result) => console.log(result));
  }
}

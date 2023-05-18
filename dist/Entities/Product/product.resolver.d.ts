import { CreateProductDto } from './DTO/createProduct.dto';
import { DeleteProductDto } from './DTO/deleteProduct.dto';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
export declare class ProductsResolver {
    private productService;
    constructor(productService: ProductService);
    products(): Promise<ProductEntity[]>;
    addProduct(createProductInput: CreateProductDto): Promise<ProductEntity>;
    deleteProduct(deleteProductInput: DeleteProductDto): Promise<ProductEntity | void>;
    updateProduct(deleteProductInput: DeleteProductDto): Promise<ProductEntity | void>;
}

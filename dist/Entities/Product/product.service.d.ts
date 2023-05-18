import { Repository } from 'typeorm';
import { CreateProductDto } from './DTO/createProduct.dto';
import { DeleteProductDto } from './DTO/deleteProduct.dto';
import { ProductEntity } from './product.entity';
export declare class ProductService {
    private readonly productRepo;
    constructor(productRepo: Repository<ProductEntity>);
    getAll(): Promise<ProductEntity[]>;
    addProduct(data: CreateProductDto): Promise<any>;
    deleteProduct(data: DeleteProductDto): Promise<any>;
}

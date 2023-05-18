"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const createProduct_dto_1 = require("./DTO/createProduct.dto");
const deleteProduct_dto_1 = require("./DTO/deleteProduct.dto");
const product_entity_1 = require("./product.entity");
const product_service_1 = require("./product.service");
let ProductsResolver = class ProductsResolver {
    constructor(productService) {
        this.productService = productService;
    }
    products() {
        return this.productService.getAll();
    }
    addProduct(createProductInput) {
        return this.productService.addProduct(createProductInput);
    }
    deleteProduct(deleteProductInput) {
        return this.productService
            .deleteProduct(deleteProductInput)
            .then((result) => console.log(result));
    }
    updateProduct(deleteProductInput) {
        return this.productService
            .deleteProduct(deleteProductInput)
            .then((result) => console.log(result));
    }
};
__decorate([
    (0, graphql_1.Query)((returns) => [product_entity_1.ProductEntity]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "products", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.ProductEntity),
    __param(0, (0, graphql_1.Args)('createProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createProduct_dto_1.CreateProductDto]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "addProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.ProductEntity, { nullable: true }),
    __param(0, (0, graphql_1.Args)('deleteProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteProduct_dto_1.DeleteProductDto]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "deleteProduct", null);
__decorate([
    (0, graphql_1.Mutation)(() => product_entity_1.ProductEntity, { nullable: true }),
    __param(0, (0, graphql_1.Args)('deleteProductInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [deleteProduct_dto_1.DeleteProductDto]),
    __metadata("design:returntype", Promise)
], ProductsResolver.prototype, "updateProduct", null);
ProductsResolver = __decorate([
    (0, graphql_1.Resolver)((of) => product_entity_1.ProductEntity),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductsResolver);
exports.ProductsResolver = ProductsResolver;
//# sourceMappingURL=product.resolver.js.map
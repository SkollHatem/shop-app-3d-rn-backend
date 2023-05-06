import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';

@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query((returns) => Product)
  product(@Args('id', { type: () => Int }) id: number): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Query((returns) => [Product], { name: 'products' })
  products() {
    return this.productService.findAll();
  }

  @Mutation((returns) => Product)
  createProduct(@Args('productInput') productInput: CreateProductInput) {
    return this.productService.createProduct(productInput);
  }
}

import { Injectable } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './dto/create-product.input';
import { MediaService } from 'src/media/media.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  createProduct(product: CreateProductInput): Promise<Product> {
    const newProduct = this.productRepository.create(product);
    return this.productRepository.save(newProduct);
  }

  findAll(): Promise<Product[]> {
    return this.productRepository.find({
      relations: {
        medias: true,
      },
    });
  }

  findOne(id: number): Promise<Product> {
    return this.productRepository.findOne({
      where: {
        id,
      },
      relations: {
        medias: true,
      },
    });
  }
}

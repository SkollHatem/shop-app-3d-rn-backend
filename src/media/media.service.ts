import { Injectable } from '@nestjs/common';
import { CreateMediaInput } from './dto/create-media.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Media } from './entities/media.entity';
import { Product } from 'src/product/entities/product.entity';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
    private productServise: ProductService,
  ) {}

  create(media: CreateMediaInput) {
    const newMedia = this.mediaRepository.create(media);
    return this.mediaRepository.save(newMedia);
  }

  findAll(): Promise<Media[]> {
    return this.mediaRepository.find({
      relations: {
        product: true,
      },
    });
  }

  findOne(id: number): Promise<Media> {
    return this.mediaRepository.findOne({
      where: {
        id,
      },
    });
  }

  getProduct(productId: number): Promise<Product> {
    return this.productServise.findOne(productId);
  }
}

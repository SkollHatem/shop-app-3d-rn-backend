import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { MediaService } from './media.service';
import { Media } from './entities/media.entity';
import { CreateMediaInput } from './dto/create-media.input';
import { Product } from 'src/product/entities/product.entity';

@Resolver(() => Media)
export class MediaResolver {
  constructor(private readonly mediaService: MediaService) {}

  @Query(() => [Media], { name: 'medias' })
  findAll() {
    return this.mediaService.findAll();
  }

  @Mutation(() => Media)
  createMedia(@Args('createMediaInput') createMediaInput: CreateMediaInput) {
    return this.mediaService.create(createMediaInput);
  }

  @ResolveField((returns) => Product)
  product(@Parent() media: Media): Promise<Product> {
    return this.mediaService.getProduct(media.productId);
  }
}

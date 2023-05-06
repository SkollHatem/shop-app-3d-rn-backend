import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty } from 'class-validator';
import { Product } from 'src/product/entities/product.entity';

@InputType()
export class CreateMediaInput {
  @IsNotEmpty()
  @Field()
  url: string;

  @IsNotEmpty()
  @IsInt()
  @Field(() => Int)
  productId: number;
}

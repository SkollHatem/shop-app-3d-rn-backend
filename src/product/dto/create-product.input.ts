import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateProductInput {
  @MinLength(5)
  @MaxLength(30)
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  img: string;

  @MinLength(5)
  @MaxLength(30)
  @IsNotEmpty()
  @Field()
  group: string;

  @IsNotEmpty()
  @Field((type) => Int)
  price: number;

  @MinLength(10)
  @MaxLength(400)
  @IsNotEmpty()
  @Field()
  description: string;
}

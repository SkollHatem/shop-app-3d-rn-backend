import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Product } from 'src/product/entities/product.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
@ObjectType()
export class Media {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field(() => Int)
  productId: number;

  @ManyToOne(() => Product, (product) => product.medias)
  @Field(() => Product)
  product: Product;
}

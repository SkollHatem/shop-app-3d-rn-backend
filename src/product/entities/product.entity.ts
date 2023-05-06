import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Media } from 'src/media/entities/media.entity';
import { Column, PrimaryGeneratedColumn, Entity, OneToMany } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  img: string;

  @Column()
  @Field()
  group: string;
  
  @Column()
  @Field((type) => Int)
  price: number;

  @Column({ type: 'text' })
  @Field()
  description: string;

  @OneToMany(() => Media, (media) => media.product)
  @Field(() => [Media])
  medias: Media[];
}

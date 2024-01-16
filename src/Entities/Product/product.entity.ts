import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'products' })
// @InputType('CreateProductDto', { isAbstract: true })
export class ProductEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  des: string;

  @Column()
  image: string;

  @Field({})
  @Column()
  productName: string;

  @Field({})
  @Column({ default: 1 })
  price: number;
}

import {
  Field,
  ObjectType,
  ID,
  GraphQLISODateTime,
  InputType,
} from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'products' })
// @InputType('CreateProductDto', { isAbstract: true })
export class ProductEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field({})
  @Column({ default: 'please work' })
  name: string;

  @Field({})
  @Column({ default: 1 })
  price: number;
}

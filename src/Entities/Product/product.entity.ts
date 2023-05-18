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
  @Column()
  name: string;

  @Field({})
  @Column()
  price: number;

  //   @Field(() => GraphQLISODateTime, {
  //     nullable: true,
  //   })
  //   @CreateDateColumn({
  //     precision: 3,

  //     default: () => 'CURRENT_TIMESTAMP(3)',
  //   })
  //   @Column()
  //   createdAt: Date;
}

import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductDto {
  //add vaalidation class
  @Field()
  name: string;

  @Field()
  price: number;
}

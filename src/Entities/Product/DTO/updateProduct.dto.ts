import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateProductDto {
  //add vaalidation class
  @Field()
  name?: string;

  @Field()
  price?: number;
}

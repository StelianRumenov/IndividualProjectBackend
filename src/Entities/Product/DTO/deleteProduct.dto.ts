import { ArgsType, Field, InputType } from '@nestjs/graphql';

@InputType()
export class DeleteProductDto {
  //add vaalidation class
  @Field()
  id: string;
}

import { Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  name: string;

  @Column()
  password: string;

  // @Column()
  // createdAt: Date;

  @Column({ default: 'user' })
  role: string;
}
//

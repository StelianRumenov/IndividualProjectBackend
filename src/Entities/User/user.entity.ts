import { Field, ID } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  username: string;

  @Column()
  password: string;

  // @Column()
  // createdAt: Date;
  @Column({ nullable: true })
  refreshToken: string;

  @Column({ default: 'user' })
  role: string;
}
//

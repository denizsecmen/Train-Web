import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item{
  @PrimaryGeneratedColumn({ type: 'int' })
  name!: string;
  @Column()
  price!: number;
  @Column()
  amount!: number;
  @Column("blob", { nullable: true, name: 'graphic' })
  image!: Buffer;
}
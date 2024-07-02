import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item{
  @PrimaryGeneratedColumn({ type: 'int' })
  name!: string;
  @Column()
  price!: number;
  @Column()
  amount!: number;
}
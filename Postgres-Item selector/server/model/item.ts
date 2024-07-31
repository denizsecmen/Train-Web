import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Item{
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number | undefined;
  @Column({unique:true})
  name!: string;
  @Column()
  price!: number;
  @Column()
  amount!: number;
  @Column("bytea", { nullable: true, name: 'graphic' })
  image!: Buffer;

}
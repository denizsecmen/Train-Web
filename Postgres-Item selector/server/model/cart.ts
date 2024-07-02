import { Entity, PrimaryGeneratedColumn,OneToOne, OneToMany } from "typeorm";
import { User } from "./user";
import { Item } from "./item";
@Entity()
export class Cart{
  @PrimaryGeneratedColumn({ type: 'int' })
  id!: number
  @OneToOne(() => User, owner => User.name)
  owner!: User[]
  @OneToMany(() => Item, items => Item.name)
  items!: Item[]
}
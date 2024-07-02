import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';


@Entity()
export class Item {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id!: number;
  @Column()
  name!: string;
  @Column()
  password!: string;
}

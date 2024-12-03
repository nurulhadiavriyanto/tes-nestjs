import {
    Column,
    CreateDateColumn,
    Entity,
    Index,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('items')
export class Item {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Index({ unique: true })
  @Column('varchar')
  category: string;

  @Column('varchar', { unique: true })
  name: string;

  @Column('int')
  stock: number;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date;
}
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { BaseToken } from '../../api/interfaces/base-token.interface';
import { Platform } from './enums/platform.enum';
import { Admin } from './admin.model';
import { Status } from './enums/status.enum';

@Entity()
export class AdminToken implements BaseToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  pushToken: string;

  @Column({ nullable: true })
  authToken: string;

  @Column({
    length: 50,
  })
  version: string;

  @Column({
    type: 'enum',
    enum: Platform,
  })
  platform: Platform;

  @Column()
  lastUsed: Date;

  @ManyToOne(() => Admin, admin => admin.tokens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    nullable: true,
  })
  user: Admin;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Active,
  })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}

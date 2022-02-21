import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { Platform } from './enums/platform.enum';
import { Options } from './options.model';
import { Status } from './enums/status.enum';

@Entity()
export class SystemVersion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: Platform,
  })
  platform: Platform;

  @Column({
    length: 50,
    nullable: false,
    default: '1.0.0-1',
  })
  version: string;

  @Column({ default: 0 })
  flag: number;

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

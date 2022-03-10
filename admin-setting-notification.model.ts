import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseSettingNotification } from '../../api/interfaces/base-setting-notification.interface';
import { Admin } from './admin.model';
import { Status } from './enums/status.enum';

@Entity()
export class AdminSettingNotification implements BaseSettingNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Admin, admin => admin.notificationSettings, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  user: Admin;

  @Column({
    type: 'boolean',
    default: false
  })
  sms: boolean;

  @Column({
    type: 'boolean',
    default: false
  })
  push: boolean;

  @Column({
    type: 'boolean',
    default: false
  })
  email: boolean;

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

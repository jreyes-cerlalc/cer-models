import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { BaseSettingNotification } from '../../api/interfaces/base-setting-notification.interface';
import { Options } from './options.model';
import { User } from './user.model';
import { Status } from './enums/status.enum';

@Entity()
export class UserSettingNotification implements BaseSettingNotification {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.notificationSettings, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn()
  user: User;

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

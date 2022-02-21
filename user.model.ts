import { Column, Entity, OneToMany, OneToOne, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseUser } from '../../api/interfaces/base-user.interface';
import { AccountType } from './enums/account-type.enum';
import { Options } from './options.model';
import { UserSettingNotification } from './user-setting-notification.model';
import { UserToken } from './user-token.model';
import { Status } from './enums/status.enum';

@Entity()
export class User implements BaseUser {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column({
    length: 50,
  })
  fullname: string;

  @Column({
    length: 50,
  })
  email: string;

  @Column({
    length: 250,
  })
  password: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column({
    type: 'enum',
    enum: AccountType,
    default: AccountType.App,
  })
  type: AccountType;

  @OneToMany(() => UserToken, userToken => userToken.user)
  tokens: UserToken[];

  @OneToOne(() => UserSettingNotification, notif => notif.user)
  notificationSettings: UserSettingNotification;

  @Column({
    default: '',
  })
  verificationCode: string;

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

import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { BaseUser } from "../../api/interfaces/base-user.interface";
import { Options } from "./options.model";
import { AdminToken } from "./admin-token.model";
import { AdminSettingNotification } from "./admin-setting-notification.model";
import { AccountType } from "./enums/account-type.enum";
import { Status } from "./enums/status.enum";
import { AdminRole } from "./enums/admin-role.enum";
import { Template } from "./template.model";
import { Contract } from "./contract.model";
import { Signer } from "./signer.model";
import { Message } from "./message.model";

@Entity()
export class Admin implements BaseUser {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column({ nullable: true })
  photoUrl: string;

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

  @Column({
    default: "",
  })
  verificationCode: string;

  @Column({
    type: "enum",
    enum: AccountType,
    default: AccountType.App,
  })
  type: AccountType;

  @Column({
    type: "enum",
    enum: AdminRole,
    default: AdminRole.SuperAdmin,
  })
  role: AdminRole;

  @Column({
    type: "enum",
    enum: Status,
    default: Status.Active,
  })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => AdminToken, (adminToken) => adminToken.user)
  tokens: AdminToken[];

  @OneToOne(() => AdminSettingNotification, (notif) => notif.user)
  notificationSettings: AdminSettingNotification;

  @OneToMany(() => Template, (template) => template.admin)
  templates: Template[];

  @OneToMany(() => Contract, (contract) => contract.admin)
  contracts: Contract[];

  @OneToMany(() => Signer, (signer) => signer.admin)
  signers: Signer[];

  @OneToMany(() => Message, (message) => message.admin)
  messages: Message[];
}

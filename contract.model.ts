import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Admin } from "./admin.model";
import { StatusContract } from "./enums/contract-status.enum";
import { OrderSigners } from "./enums/order-signers.enum";
import { Message } from "./message.model";
import { Signer } from "./signer.model";
import { Template } from "./template.model";

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  title: string;

  @Column({
    comment: "Número de firmantes",
  })
  numberOfSignatories: number;

  @Column({
    type: "text",
  })
  textContract: string;

  @Column({
    type: "text",
  })
  answers: string;

  @ManyToOne(() => Template, (template) => template.contracts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  template: Template;

  @ManyToOne(() => Admin, (admin) => admin.contracts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  admin: Admin;

  @Column({
    type: "enum",
    enum: OrderSigners,
    default: OrderSigners.Automatic,
  })
  orderSigners: OrderSigners;

  @OneToMany(() => Signer, (signer) => signer.contract)
  signers: Signer[];

  @OneToOne(() => Message, (message) => message.contract)
  message: Message;

  @Column({
    type: "enum",
    enum: StatusContract,
    default: StatusContract.Created,
  })
  statusContract: StatusContract;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

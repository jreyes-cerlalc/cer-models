import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Admin } from "./admin.model";
import { StatusContract } from "./enums/contract-status.enum";
import { Template } from "./template.model";

@Entity()
export class Contract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  title: string;

  @Column()
  numberOfSignatories: number;

  @Column({
    type: "text",
  })
  textContract: string;

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
    enum: StatusContract,
    default: StatusContract.Created,
  })
  statusContract: StatusContract;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}

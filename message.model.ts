import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Admin } from "./admin.model";
import { Contract } from "./contract.model";
import { Status } from "./enums/status.enum";

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Contract, (contract) => contract.message, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  contract: Contract;

  @ManyToOne(() => Admin, (admin) => admin.messages, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  admin: Admin;

  @Column({
    type: "varchar",
    length: 255,
  })
  subject: string;

  @Column({
    type: "text",
  })
  message: string;

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
}

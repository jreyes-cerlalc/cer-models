import { type } from "os";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Admin } from "./admin.model";
import { Contract } from "./contract.model";
import { KeyDocument } from "./enums/signer-key.enum";
import { Status } from "./enums/status.enum";

@Entity()
export class Signer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Admin, (admin) => admin.signers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  admin: Admin;

  @Column({
    length: 255,
  })
  fullname: string;

  @Column({
    type: "varchar",
    length: 150,
  })
  email: string;

  @Column({
    type: "enum",
    enum: KeyDocument,
    default: KeyDocument.CC,
    comment: "Tipo de identificación del firmante",
  })
  documentType: KeyDocument;

  @Column()
  documentNumber: number;

  @Column({
    type: "boolean",
    default: 0,
    comment: "Para el firmante clave de acceso al documento",
  })
  requiresPassword: boolean;

  @Column({
    type: "tinyint",
  })
  signatoryPosition: number;

  @Column({
    type: "boolean",
    default: 0,
  })
  alreadySigned: boolean;

  @ManyToOne(() => Contract, (contract) => contract.signers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contract: Contract;

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

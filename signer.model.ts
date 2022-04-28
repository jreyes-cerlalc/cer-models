import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Admin } from "./admin.model";
import { Contract } from "./contract.model";
import { SignatureStatus } from "./enums/signature-status.enum";
import { KeyDocument } from "./enums/signer-key.enum";
import { Status } from "./enums/status.enum";
import { SignerReasonsRejection } from "./signer-reasons-rejection.model";
import { TypeSignature } from "./enums/type-signature.enum";

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
    comment: "Posición de envio de contrato a firmante",
  })
  signatoryPosition: number;

  @Column({
    type: "enum",
    enum: SignatureStatus,
    default: SignatureStatus.Pending,
    comment: "Estado del firmante si ya vio el contrato o no",
  })
  signatureStatus: SignatureStatus;

  @Column({
    type: "boolean",
    default: false,
    comment: "Si el firmante visualizo o no el contrato",
  })
  viewedContract: boolean;

  @Column({
    type: "enum",
    enum: TypeSignature,
    comment: "Tipo de firma del firmante sea imagen o texto",
  })
  typeSignature: TypeSignature;

  @Column({
    type: "text",
  })
  signatureImage: string;

  @Column({
    type: "varchar",
    length: 50,
  })
  signatureText: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  fontFamily: string;

  @ManyToOne(() => Contract, (contract) => contract.signers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contract: Contract;

  @OneToMany(
    () => SignerReasonsRejection,
    (signerReasonsRejection) => signerReasonsRejection.signer,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  signerReasonsRejections: SignerReasonsRejection;

  @Column({
    type: "timestamp",
    default: () => "NOW()",
    comment: "Fecha de envio a firmantes",
  })
  sendDate: Date;

  @Column({
    type: "timestamp",
    comment: "Fecha cuando firma un firmante",
  })
  signatureDate: Date;

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

import { type } from "os";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Admin } from "./admin.model";
import { KeyDocument } from "./enums/signer-key";

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
    default: KeyDocument.CitizenshipID,
    comment: "Tipo de identificación del firmante",
  })
  identification: KeyDocument;

  @Column()
  numberIdentification: number;

  @Column({
    type: "boolean",
    default: false,
    comment: "Para el firmante clave de acceso al documento",
  })
  keyDocumentAccess: boolean;
}

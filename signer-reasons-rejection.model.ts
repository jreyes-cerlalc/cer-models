import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Signer } from "./signer.model";

@Entity()
export class SignerReasonsRejection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        comment: "Otro motivo de rechazo del firmante"
    })
    description: String

    @ManyToOne(() => Signer, (signer) => signer.signerReasonsRejections, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    signer: Signer;
}
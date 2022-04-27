import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { ReasonsRejection } from "./enums/reasons-rejection.enum";
import { Signer } from "./signer.model";

@Entity()
export class SignerReasonsRejection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: ReasonsRejection,
        comment: "Motivos de rechazo del firmante"
    })
    reasonsRejection: ReasonsRejection

    @Column({
        type: "text",
        comment: "Otro motivo de rechazo del firmante"
    })
    otherReasonsRejection: string

    @ManyToOne(() => Signer, (signer) => signer.signerReasonsRejections, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    })
    signer: Signer;
}
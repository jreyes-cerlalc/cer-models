import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { TypeContractEnum } from "./enums/type-contract.enum";

@Entity()
export class ParameterizationTypeContract {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    type: "enum",
    enum: TypeContractEnum,
    comment: "Tipo de contrato",
  })
  typeContract: TypeContractEnum;
}

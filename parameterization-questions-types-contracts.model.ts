import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { ParameterizationQuestion } from "./parameterization-question.model";
import { ParameterizationTypeContract } from "./parameterization-type-contract.model";

@Entity()
export class ParameterizationQuestionsTypesContracts {
  @PrimaryGeneratedColumn()
  id: number;

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

  @ManyToOne(
    () => ParameterizationQuestion,
    (parameterizationQuestion) => parameterizationQuestion.typesContracts
  )
  parameterizationQuestion: ParameterizationQuestion;

  @ManyToOne(
    () => ParameterizationTypeContract,
    (parameterizationTypeContract) =>
      parameterizationTypeContract.typesContracts
  )
  parameterizationTypeContract: ParameterizationTypeContract;
}

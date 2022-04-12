import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Status } from "./enums/status.enum";
import { TypeModule } from "./enums/type-module.enum";
import { ParameterizationQuestionsTypesContracts } from "./parameterization-questions-types-contracts.model";
import { Template } from "./template.model";

@Entity()
export class ParameterizationTypeContract {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  name: string;

  @Column({
    type: "enum",
    enum: TypeModule,
    comment: "Tipo de contrato",
  })
  typeModule: TypeModule;

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

  @OneToMany(
    () => ParameterizationQuestionsTypesContracts,
    (parameterizationQuestionsTypesContracts) =>
      parameterizationQuestionsTypesContracts.parameterizationTypeContract
  )
  typesContracts: ParameterizationQuestionsTypesContracts[];

  @OneToMany(() => Template, (template) => template.typeContract, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  templates: Template[];
}

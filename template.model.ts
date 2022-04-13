import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Admin } from "./admin.model";
import { Contract } from "./contract.model";
import { Status } from "./enums/status.enum";
import { ParameterizationTypeContract } from "./parameterization-type-contract.model";

@Entity()
export class Template {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 255,
  })
  title: string;

  @Column({
    type: "text",
  })
  textTemplate: string;

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
    () => ParameterizationTypeContract,
    (parameterizationTypeContract) => parameterizationTypeContract.templates,
    {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    }
  )
  typeContract: ParameterizationTypeContract;

  @ManyToOne(() => Admin, (admin) => admin.templates, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  admin: Admin;

  @OneToMany(() => Contract, (contract) => contract.template, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  contracts: Contract[];
}

import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Admin } from "./admin.model";
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

  @ManyToOne(() => Admin, (user) => user.templates, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn()
  user: Admin;
}

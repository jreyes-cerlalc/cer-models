import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from "typeorm";
import { Options } from "./options.model";
import { SystemState } from "./system-state.model";
import { Status } from "./enums/status.enum";

@Entity()
export class SystemCity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

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

  @ManyToOne(() => SystemState, (state) => state.cities, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  state: SystemState;
}

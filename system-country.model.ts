import { Column, Entity, OneToMany, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Options } from './options.model';
import { SystemState } from './system-state.model';
import { Status } from './enums/status.enum';

@Entity()
export class SystemCountry {
  @PrimaryColumn({
    length: 2,
    unique: true,
  })
  id: string;

  @Column({
    length: 70,
  })
  country: string;

  @Column({
    length: 4,
  })
  callingCode: string;

  @Column({
    length: 150,
  })
  flag: string;

  @Column()
  currency: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Active,
  })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => SystemState, state => state.country)
  states: SystemState[];
}

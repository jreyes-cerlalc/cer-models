import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { Options } from './options.model';
import { SystemCity } from './system-city.model';
import { SystemCountry } from './system-country.model';
import { Status } from './enums/status.enum';

@Entity()
export class SystemState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  name: string;

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

  @ManyToOne(() => SystemCountry, country => country.states)
  country: SystemCountry;

  @OneToMany(() => SystemCity, city => city.state)
  cities: SystemCity[];
}

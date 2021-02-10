import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Options } from './options.model';
import { SystemCity } from './system-city.model';
import { SystemCountry } from './system-country.model';

@Entity()
export class SystemState {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 150,
  })
  name: string;

  @Column(() => Options)
  options: Options;

  @ManyToOne(() => SystemCountry, country => country.states)
  country: SystemCountry;

  @OneToMany(() => SystemCity, city => city.state)
  cities: SystemCity[];
}

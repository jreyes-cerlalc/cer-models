import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Options } from './options.model';
import { SystemCity } from './system-city.model';

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

  @Column(() => Options)
  options: Options;

  @OneToMany(() => SystemCity, city => city.country)
  cities: SystemCity[];
}

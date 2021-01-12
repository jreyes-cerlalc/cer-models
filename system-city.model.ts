import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SystemCountry } from './system-country';
import { Options } from './options.model';

@Entity()
export class SystemCity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column(() => Options)
  options: Options;

  @ManyToOne(_ => SystemCountry, country => country.cities)
  country: SystemCountry;
}

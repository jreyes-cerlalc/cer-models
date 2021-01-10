import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Country } from './country.model';
import { Options } from './options.model';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column(() => Options)
  options: Options;

  @ManyToOne(_ => Country, country => country.cities)
  country: Country;
}

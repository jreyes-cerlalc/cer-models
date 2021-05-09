import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Options } from './options.model';

@Entity()
export class Company {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column({
    length: 50,
  })
  name: string;

  @Column({ default: 0 })
  nit: number;

  @Column({ default: 0 })
  lastDigitNit: number;

  @Column(() => Options)
  options: Options;

}

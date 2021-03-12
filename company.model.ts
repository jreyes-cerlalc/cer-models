import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Options } from './options.model';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

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

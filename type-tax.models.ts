import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Options } from './options.model';

@Entity()
export class TypeTax {
  @PrimaryColumn({
    length: 36,
  })
  id: string;

  @Column({
    length: 50,
  })
  name: string;

}

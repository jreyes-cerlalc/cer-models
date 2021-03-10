import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { Options } from './options.model';
import { TypeTax } from './type-tax.models';
import { Company } from './company.model';

@Entity()
export class CompanyTax {
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

  @ManyToOne(() => TypeTax, typeTax => typeTax.id)
  typeTax: TypeTax;

  @ManyToOne(() => Company, company => company.id)
  company: Company;

}
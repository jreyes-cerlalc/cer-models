import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './user.model';
import { Company } from './company.model';
import { Options } from './options.model';

@Entity()
export class UserCompany {
  @PrimaryColumn({
    length: 36,
  })
  id: string;


  @ManyToOne(() => User, user => user.tokens, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @ManyToOne(() => Company, company => company.id, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  
  company: Company;

  @Column(() => Options)
  options: Options;
  
}

import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
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
  userId: User;

  @ManyToOne(() => Company, company => company.states, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  companyId: Company;

  @Column(() => Options)
  options: Options;
  
}

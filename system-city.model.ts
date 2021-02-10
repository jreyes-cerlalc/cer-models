import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Options } from './options.model';
import { SystemState } from './system-state.model';

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

  @ManyToOne(() => SystemState, state => state.cities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  state: SystemState;
}

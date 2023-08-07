import {
  Cascade,
  Entity,
  EntityRepositoryType,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Board } from './board.entity';
import { BaseEntity } from './base.entity';
import { TodoRepository } from 'src/repositories/todo.repository';

@Entity({ customRepository: () => TodoRepository })
export class Todo extends BaseEntity {
  @PrimaryKey({
    type: 'uuid',
    onCreate: () => 'uuid_generate_v4()',
  })
  id!: string;

  @Property({ type: 'text' })
  title!: string;

  @Property({ type: 'text' })
  description!: string;

  @ManyToOne(() => Board, {
    mapToPk: true,
    cascade: [Cascade.ALL],
  })
  boardId!: string;

  [EntityRepositoryType]?: TodoRepository;
}

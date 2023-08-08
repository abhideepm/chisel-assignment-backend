import {
  Cascade,
  Entity,
  EntityRepositoryType,
  Enum,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { TodoRepository } from 'src/repositories/todo.repository';
import { BaseEntity } from './base.entity';
import { Board } from './board.entity';
import { v4 } from 'uuid';

export enum TodoStatus {
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

@Entity({ customRepository: () => TodoRepository })
export class Todo extends BaseEntity {
  @PrimaryKey({
    type: 'uuid',
    onCreate: () => v4(),
  })
  id!: string;

  @Property({ type: 'text' })
  title!: string;

  @ManyToOne(() => Board, {
    mapToPk: true,
    cascade: [Cascade.ALL],
  })
  boardId!: string;

  @Enum({
    items: () => TodoStatus,
    nullable: false,
  })
  status!: TodoStatus;

  [EntityRepositoryType]?: TodoRepository;
}

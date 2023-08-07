import {
  Entity,
  EntityRepositoryType,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { BaseEntity } from './base.entity';
import { BoardRepository } from 'src/repositories/board.repository';

@Entity({ customRepository: () => BoardRepository })
export class Board extends BaseEntity {
  @PrimaryKey({
    type: 'uuid',
    onCreate: () => 'uuid_generate_v4()',
  })
  id!: string;

  @Property({ type: 'text' })
  title!: string;

  @Property({ type: 'text', nullable: true })
  description?: string;

  [EntityRepositoryType]?: BoardRepository;
}

import { Module } from '@nestjs/common';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Board } from 'src/entities/board.entity';

@Module({
  imports: [MikroOrmModule.forFeature([Board])],
  controllers: [BoardController],
  providers: [BoardService],
})
export class BoardModule {}

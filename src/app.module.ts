import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { BoardModule } from './modules/board/board.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';

@Module({
  imports: [
    TodoModule,
    BoardModule,
    MikroOrmModule.forRoot({
      entities: ['./dist/entities'],
      entitiesTs: ['./src/entities'],
      dbName: 'postgres',
    }),
  ],
})
export class AppModule {}

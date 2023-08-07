import { Injectable } from '@nestjs/common';
import { TodoRepository } from 'src/repositories/todo.repository';
import { CreateTodoDto } from './dtos/todo.dto';
import { TodoStatus } from 'src/entities/todo.entity';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo({ title, boardId }: CreateTodoDto) {
    const todo = this.todoRepository.create({
      title,
      boardId,
      status: TodoStatus.IN_PROGRESS,
    });

    await this.todoRepository.persistAndFlush(todo);
  }

  async getTodos(boardId: string) {
    return this.todoRepository.find({ boardId });
  }

  async updateTodoStatus(todoId: string, status: TodoStatus) {
    const todo = await this.todoRepository.findOneOrFail({ id: todoId });

    todo.status = status;

    await this.todoRepository.persistAndFlush(todo);
  }

  async deleteTodoById(todoId: string) {
    await this.todoRepository.nativeDelete({ id: todoId });
  }
}

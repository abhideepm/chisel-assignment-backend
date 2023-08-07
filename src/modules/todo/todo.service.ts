import { Injectable } from '@nestjs/common';
import { TodoStatus } from 'src/entities/todo.entity';
import { TodoRepository } from 'src/repositories/todo.repository';

@Injectable()
export class TodoService {
  constructor(private readonly todoRepository: TodoRepository) {}

  async createTodo(title: string, boardId: string) {
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

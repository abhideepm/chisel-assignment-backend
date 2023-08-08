import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  CreateTodoDto,
  DeleteTodoDto,
  GetTodosParamsDto,
  UpdateTodoStatusDto,
  UpdateTodoStatusParamsDto,
} from './dtos/todo.dto';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post()
  createTodo(@Body() { title, boardId }: CreateTodoDto) {
    return this.todoService.createTodo(title, boardId);
  }

  @Delete(':todoId')
  deleteTodoById(@Param() { todoId }: DeleteTodoDto) {
    return this.todoService.deleteTodoById(todoId);
  }

  @Patch(':todoId/status')
  updateTodoStatus(
    @Param() { todoId }: UpdateTodoStatusParamsDto,
    @Body() { status }: UpdateTodoStatusDto,
  ) {
    return this.todoService.updateTodoStatus(todoId, status);
  }

  @Get(':boardId')
  getTodos(@Param() { boardId }: GetTodosParamsDto) {
    return this.todoService.getTodos(boardId);
  }
}

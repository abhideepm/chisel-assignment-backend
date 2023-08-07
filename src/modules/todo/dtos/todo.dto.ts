import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { TodoStatus } from 'src/entities/todo.entity';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsNotEmpty()
  @IsUUID(4)
  boardId!: string;
}

export class DeleteTodoDto {
  @IsNotEmpty()
  @IsUUID(4)
  todoId!: string;
}

export class GetTodosParamsDto {
  @IsNotEmpty()
  @IsUUID(4)
  boardId!: string;
}

export class UpdateTodoStatusParamsDto {
  @IsNotEmpty()
  @IsUUID(4)
  todoId!: string;
}

export class UpdateTodoStatusDto {
  @IsNotEmpty()
  @IsEnum(TodoStatus)
  status!: TodoStatus;
}

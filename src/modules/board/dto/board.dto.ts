import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class UpdateBoardDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class UpdateBoardParamsDto {
  @IsString()
  @IsNotEmpty()
  boardId!: string;
}

export class DeleteBoardParamsDto {
  @IsString()
  @IsNotEmpty()
  boardId!: string;
}

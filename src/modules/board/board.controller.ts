import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import {
  CreateBoardDto,
  DeleteBoardParamsDto,
  UpdateBoardDto,
  UpdateBoardParamsDto,
} from './dto/board.dto';

@Controller('board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  createBoard(@Body() { title, description }: CreateBoardDto) {
    return this.boardService.createBoard(title, description);
  }

  @Get()
  getAllBoards() {
    return this.boardService.getAllBoards();
  }

  @Patch(':boardId')
  update(
    @Param() { boardId }: UpdateBoardParamsDto,
    @Body() { description, title }: UpdateBoardDto,
  ) {
    return this.boardService.updateBoard(boardId, title, description);
  }

  @Delete(':boardId')
  remove(@Param() { boardId }: DeleteBoardParamsDto) {
    return this.boardService.deleteBoard(boardId);
  }
}

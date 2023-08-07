import { Injectable } from '@nestjs/common';
import { BoardRepository } from 'src/repositories/board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}

  createBoard(title: string, description?: string) {
    const board = this.boardRepository.create({
      title,
      description,
    });

    return this.boardRepository.persistAndFlush(board);
  }

  getAllBoards() {
    return this.boardRepository.findAll();
  }

  updateBoard(boardId: string, title?: string, description?: string) {
    return this.boardRepository.nativeUpdate(
      { id: boardId },
      { title, description },
    );
  }

  deleteBoard(boardId: string) {
    return this.boardRepository.nativeDelete({ id: boardId });
  }
}

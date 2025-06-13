import { Component, Input } from '@angular/core'
import { NgFor, CommonModule } from '@angular/common'
import { ChessBoard, ChessPiece, PieceColor, PieceType } from '../../../models/piece'

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  standalone: true,
  imports: [
    NgFor,
    CommonModule]
})
export class ChessBoardComponent {
  @Input() chessBoard: ChessBoard | undefined
  onSquareClick(squareId: string): void
  {
    console.log(this.chessBoard)
  }

  getPieceAt(squareId: string): ChessPiece | null {
    const piece = this.chessBoard?.pieces.find(sq => sq.position === squareId);
    return piece ? piece : null
  }

  getPieceSymbol(piece: ChessPiece): string {
    const symbols = {
      [PieceColor.White]: {
        [PieceType.King]: '♔',
        [PieceType.Queen]: '♕',
        [PieceType.Rook]: '♖',
        [PieceType.Bishop]: '♗',
        [PieceType.Knight]: '♘',
        [PieceType.Pawn]: '♙'
      },
      [PieceColor.Black]: {
        [PieceType.King]: '♚',
        [PieceType.Queen]: '♛',
        [PieceType.Rook]: '♜',
        [PieceType.Bishop]: '♝',
        [PieceType.Knight]: '♞',
        [PieceType.Pawn]: '♟'
      }
    };

    return symbols[piece.color][piece.type];
  }
}

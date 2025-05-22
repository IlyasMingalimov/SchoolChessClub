import { Component, OnInit } from '@angular/core'
import { ChessPiece, ChessSquare, PieceColor, PieceType } from '../../models/piece'
import { NgFor, CommonModule } from '@angular/common'

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  imports: [NgFor, CommonModule],
  standalone: true
})
export class ChessBoardComponent implements OnInit {
  squares: ChessSquare[] = []
  pieces: ChessPiece[] = []

  ngOnInit(): void {
    this.initializeBoard()
    this.initializePieces()
  }

  private initializeBoard(): void {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    this.squares = [];

    for (let row = 8; row >= 1; row--) {
      for (let col = 0; col < 8; col++) {
        const isWhite = (row + col) % 2 === 0;
        this.squares.push({
          id: `${letters[col]}${row}`,
          color: isWhite ? 'white' : 'black',
          piece: null
        });
      }
    }
  }

  private initializePieces(): void {
    // Белые фигуры
    this.addPiece('a1', PieceType.Rook, PieceColor.White);
    this.addPiece('b1', PieceType.Knight, PieceColor.White);
    this.addPiece('c1', PieceType.Bishop, PieceColor.White);
    this.addPiece('d1', PieceType.Queen, PieceColor.White);
    this.addPiece('e1', PieceType.King, PieceColor.White);
    this.addPiece('f1', PieceType.Bishop, PieceColor.White);
    this.addPiece('g1', PieceType.Knight, PieceColor.White);
    this.addPiece('h1', PieceType.Rook, PieceColor.White);
    for (let col = 0; col < 8; col++) {
      this.addPiece(`${String.fromCharCode(97 + col)}2`, PieceType.Pawn, PieceColor.White);
    }

    // Черные фигуры
    this.addPiece('a8', PieceType.Rook, PieceColor.Black);
    this.addPiece('b8', PieceType.Knight, PieceColor.Black);
    this.addPiece('c8', PieceType.Bishop, PieceColor.Black);
    this.addPiece('d8', PieceType.Queen, PieceColor.Black);
    this.addPiece('e8', PieceType.King, PieceColor.Black);
    this.addPiece('f8', PieceType.Bishop, PieceColor.Black);
    this.addPiece('g8', PieceType.Knight, PieceColor.Black);
    this.addPiece('h8', PieceType.Rook, PieceColor.Black);
    for (let col = 0; col < 8; col++) {
      this.addPiece(`${String.fromCharCode(97 + col)}7`, PieceType.Pawn, PieceColor.Black);
    }
  }

  private addPiece(position: string, type: PieceType, color: PieceColor): void {
    const piece: ChessPiece = { type, color, position };
    this.pieces.push(piece);
    const square = this.squares.find(sq => sq.id === position);
    if (square) {
      square.piece = piece;
    }
  }

  getPieceAt(squareId: string): ChessPiece | null {
    const square = this.squares.find(sq => sq.id === squareId);
    return square ? square.piece : null;
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

  selectedPiece: ChessPiece | null = null;

  onSquareClick(squareId: string): void {
    const piece = this.getPieceAt(squareId);

    if (this.selectedPiece) {
      // Попытка переместить выбранную фигуру
      this.movePiece(this.selectedPiece, squareId);
      this.selectedPiece = null;
    } else if (piece) {
      // Выбор фигуры
      this.selectedPiece = piece;
    }
  }

  movePiece(piece: ChessPiece, newPosition: string): void {
    // Удаляем фигуру со старой позиции
    const oldSquare = this.squares.find(sq => sq.id === piece.position);
    if (oldSquare) {
      oldSquare.piece = null;
    }

    // Устанавливаем новую позицию
    piece.position = newPosition;
    const newSquare = this.squares.find(sq => sq.id === newPosition);
    if (newSquare) {
      newSquare.piece = piece;
    }
  }
}

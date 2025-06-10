import { Component, OnInit } from '@angular/core'
import { ChessPiece, ChessSquare, PieceColor, PieceType } from '../../../models/piece'
import { NgFor, CommonModule } from '@angular/common'

@Component({
  selector: 'chess-board',
  templateUrl: './chess-board.component.html',
  styleUrls: ['./chess-board.component.scss'],
  imports: [NgFor, CommonModule],
  standalone: true
})
export class ChessBoardComponent {
  getPieceSymbol(piece: ChessPiece): string { return `1` }
  selectedPiece: ChessPiece | null = null;
  onSquareClick(squareId: string): void { }
}

import { Component } from '@angular/core'
import { ChessPiece } from '../../../models/piece'
import { NgFor, CommonModule } from '@angular/common'

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
  selectedPiece: ChessPiece | null = null;
  getPieceSymbol(piece: ChessPiece): string { return `a` }
  onSquareClick(squareId: string): void { }
}

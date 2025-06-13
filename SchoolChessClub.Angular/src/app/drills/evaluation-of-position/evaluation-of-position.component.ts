import { Component } from '@angular/core'
import { ChessBoardComponent } from '../../shared/chess-board/chess-board.component'
import { EvaluatorComponent } from '../../shared/evaluator/evaluator.component'
import { evaluationDrill, WebapiService } from '../../../services/webapi.service'
import { ChessBoard } from '../../../models/piece';


@Component({
  selector: `evaluation-of-position`,
  templateUrl: './evaluation-of-position.component.html',
  styleUrl: './evaluation-of-position.component.scss',
  standalone: true,
  imports: [
    ChessBoardComponent,
    EvaluatorComponent],
  providers: [
    WebapiService]
})

export class EvaluationOfPosition {
  constructor(private webapi: WebapiService)
  {
      this.drill = this.webapi.getRandomEvaluationDrill();
  }

  getChessBoard(): ChessBoard | undefined {
    return this.drill?.chessBoard ? this.drill?.chessBoard : undefined
  }

  drill: evaluationDrill | undefined
}

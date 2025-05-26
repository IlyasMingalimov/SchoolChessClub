import { Component } from '@angular/core'
import { ChessBoardComponent } from '../shared/chess-board.component'
import { EvaluatorComponent } from '../shared/evaluator.component'


@Component({
  selector: `evaluation-of-position`,
  templateUrl: './evaluation-of-position.component.html',
  styleUrl: './evaluation-of-position.component.scss',
  standalone: true,
  imports: [ChessBoardComponent, EvaluatorComponent]
})

export class EvaluationOfPosition {
   
}

export interface EvaluationOfPositionInput
{

}

import { Component, Input } from '@angular/core'

@Component({
  selector: `evaluation-of-position`,
  templateUrl: './evaluation-of-position.component.html',
  styleUrl: './evaluation-of-position.component.scss',
  standalone: true
})

export class EvaluationOfPosition {
  @Input() Input: EvaluationOfPositionInput | undefined 
}

export interface EvaluationOfPositionInput
{

}

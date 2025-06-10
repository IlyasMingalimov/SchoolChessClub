import { Component } from '@angular/core';
import { EvaluationOfPosition } from '../drills/evaluation-of-position/evaluation-of-position.component'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  standalone: true,
  imports: [EvaluationOfPosition]
})
export class ContentComponent {

}

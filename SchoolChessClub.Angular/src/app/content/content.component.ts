import { Component } from '@angular/core';
import { EvaluationOfPosition } from '../drills/evaluation-of-position.component'

@Component({
  selector: 'app-content',
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  imports: [EvaluationOfPosition]
})
export class ContentComponent {

}

import { Component } from '@angular/core';
import { ChessBoardComponent } from './chess-board.component'
import { EvaluatorComponent } from './evaluator.component'
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ChessBoardComponent, EvaluatorComponent, NgIf, CommonModule]
})
export class AppComponent {
  title = 'SchoolChessClub';
  selectedValue: number = 100;

  isSubmitting: boolean = false;
  submitMessage: string = '';

  async submitData() {
    this.isSubmitting = true;
    this.submitMessage = '';

    const dataToSend = {
      value: this.selectedValue,
      timestamp: new Date().toISOString()
    };
    console.log(JSON.stringify(dataToSend));
    this.submitMessage = JSON.stringify(dataToSend);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Ждем 2 секунды
    this.isSubmitting = false;
  }
}

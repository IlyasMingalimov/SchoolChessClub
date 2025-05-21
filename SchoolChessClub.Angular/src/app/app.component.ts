import { Component, OnInit } from '@angular/core';
import { ChessBoardComponent } from './chess-board.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
  imports: [ChessBoardComponent]
})
export class AppComponent {
  title = 'SchoolChessClub';
}

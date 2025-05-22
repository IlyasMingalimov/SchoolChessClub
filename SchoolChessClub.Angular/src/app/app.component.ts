import { Component } from '@angular/core'
import { ChessBoardComponent } from './chess-board.component'
import { EvaluatorComponent } from './evaluator.component'
import { NgIf, CommonModule } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [ChessBoardComponent, EvaluatorComponent, NgIf, CommonModule]
})
export class AppComponent {
  title = 'SchoolChessClub';
  selectedValue: number = 0
  desiredvalue: number = 2.5
  minValue: number = -10
  maxValue: number = 10
  step: number = 0.1
  newValue: number = 1
  currentColor: string = this.getGradientColor(100)

  isSubmitting: boolean = false
  isUpdating: boolean = false
  submitMessage: string = ''

  async submitData() {
    this.isSubmitting = true
    this.submitMessage = ''

    this.newValue = calculateAccuracy(this.selectedValue, this.desiredvalue, this.desiredvalue - this.desiredvalue, this.desiredvalue + this.desiredvalue)
    this.submitMessage = this.newValue.toString()

    this.currentColor = this.getGradientColor(this.newValue)

    await new Promise(resolve => setTimeout(resolve, 1500)) 
  }

  async update()
  {
    this.isUpdating = true

    await new Promise(resolve => setTimeout(resolve, 1000))

    this.currentColor = this.getGradientColor(100)
    this.submitMessage = ''

    this.isUpdating = false
    this.isSubmitting = false

  }

  getGradientColor(value: number): string {
    const hue = (value / 100) * 120; // 0° (красный) → 120° (зелёный)
    return `hsl(${hue}, 100%, 50%)`;
  }
}

/**
 * Рассчитывает, насколько близко предсказание к желаемому значению в заданном диапазоне.
 * @param prediction - Число, названное игроком.
 * @param target - Желаемое значение.
 * @param min - Минимальное значение диапазона.
 * @param max - Максимальное значение диапазона.
 * @returns Точность в процентах (0–100%).
 */

function calculateAccuracy(
  prediction: number,
  target: number,
  min: number,
  max: number
): number {
  // Проверка на выход за границы диапазона
  if (prediction < min || prediction > max) {
    return 0
  }

  // Максимально возможное отклонение от цели до границ диапазона
  const maxPossibleDeviation = Math.max(
    Math.abs(target - min),
    Math.abs(target - max)
  );

  // Фактическое отклонение от цели
  const deviation = Math.abs(prediction - target);

  // Расчёт точности (0% при максимальном отклонении, 100% при точном попадании)
  const accuracy = (1 - deviation / maxPossibleDeviation) * 100

  // Округление до двух знаков после запятой (опционально)
  return Math.max(0, Math.min(100, parseFloat(accuracy.toFixed(2))))
}

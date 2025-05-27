import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'evaluator',
  templateUrl: './evaluator.component.html',
  styleUrls: ['./evaluator.component.scss'],
  standalone: true
})

export class EvaluatorComponent{/*
  @Input() min: number = -10
  @Input() max: number = 10
  @Input() step: number = 0.1
  @Input() value: number = 0

  @Output() valueChange = new EventEmitter<number>()

  onSliderChange(event: Event) {
    this.updateValue((event.target as HTMLInputElement).valueAsNumber)
  }

  onNumberChange(event: Event) {
    this.updateValue((event.target as HTMLInputElement).valueAsNumber)
  }

  private updateValue(newValue: number) {
    const validatedValue = Math.min(Math.max(newValue, this.min), this.max)
    this.value = validatedValue
    this.valueChange.emit(validatedValue)
  }*/
}

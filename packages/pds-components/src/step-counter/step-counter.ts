import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'pds-step-counter',
  styleUrls: ['./step-counter.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="counter-value">{{ value }}</div>
    <ng-container *ngIf="!!max">
      <div class="counter-divider">&frasl;</div>
      <div class="counter-max-value">{{ max }}</div>
    </ng-container>
  `,
})
export class PdsStepCounter {
  @Input() value = 1;
  @Input() max: number | null;
}

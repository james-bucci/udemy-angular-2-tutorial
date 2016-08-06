import {Component, Input} from 'angular2/core';

@Component({
  selector: 'spinner',
  template: `<i *ngIf="visible" class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></i>`
})

export class SpinnerComponent {
  @Input() visible = true;
}

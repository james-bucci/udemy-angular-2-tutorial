import { Component } from 'angular2/core';

@Component({
  selector: 'star',
  template: `
    <i
      class="glyphicon"
      [class.glyphicon-star]="isFull"
      [class.glyphicon-star-empty]="!isFull"
      (click)="onClick($event)"
    ></i>
  `
})

export class StarComponent {
  isFull=true;
  onClick($event) {
    this.isFull=!this.isFull;
  }
}

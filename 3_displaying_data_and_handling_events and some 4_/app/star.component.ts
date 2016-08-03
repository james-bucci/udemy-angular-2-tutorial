import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'star',
  templateUrl: 'app/star.template.html',
  styles: [`
    .glyphicon-star {
      color: orange
    }
  `]
  // inputs: ['isFav']
})

export class StarComponent {
  @Input() isFav; //changes private prop to input prop

  @Output() change = new EventEmitter();

  onClick($event) {
    this.isFav=!this.isFav;
    this.change.emit({ newValue: this.isFav })
  }
}

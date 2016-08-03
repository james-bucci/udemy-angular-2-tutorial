import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'heart',
  templateUrl: 'app/heart.template.html',
  styles: [`
    i, p {
      font-size: 50px;
      display: inline;
    }
    .glyphicon-heart {
      color: #ccc;
      cursor: pointer;
    }
    .pink {
      color: deeppink;
    }
  `]
  // inputs: ['isFav']
})

export class HeartComponent {
  @Input() isFav; //changes private prop to input prop
  @Input() count;

  @Output() change = new EventEmitter();

  onClick($event) {
    let newCount = this.count
    this.isFav ? newCount-- : newCount++
    this.isFav=!this.isFav;
    this.change.emit({ newCount })
  }
}

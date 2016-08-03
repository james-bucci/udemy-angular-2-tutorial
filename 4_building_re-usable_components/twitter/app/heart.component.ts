import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'heart',
  template: `
  <div>
  <i
    class="glyphicon glyphicon-heart"
    [class.pink]="isFav"
    (click)="onClick($event)"
  ></i>
  <p>{{ count }}</p>
  </div>
  `,
  styles: [`
    i, p {
      font-size: 12px;
      display: inline;
    }
    div {
      display: block;
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
    console.log("click")
    let newCount = this.count
    this.isFav ? newCount-- : newCount++
    this.isFav=!this.isFav;
    this.change.emit({ newCount })
  }
}

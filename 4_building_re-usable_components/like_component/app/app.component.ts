import { Component } from 'angular2/core';
import { HeartComponent } from './heart.component';

@Component({
    selector: 'my-app',
    template: `
      <heart
        [isFav]="heart.isFav"
        [count]="heart.count"
        (change)="onFavChange($event)"
      ></heart>
    `,
    directives: [HeartComponent]
})
export class AppComponent {
  heart = {
    isFav: false,
    count:10
  }
  onFavChange(e) {
    console.log(e);
    this.heart.count=e.newCount;
  }
}

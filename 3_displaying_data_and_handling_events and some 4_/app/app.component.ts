import { Component } from 'angular2/core';
import { StarComponent } from './star.component';

@Component({
    selector: 'my-app',
    template: `
      <star
        [isFav]="post.isFav"
        (change)="onFavChange($event)"
      ></star>
    `,
    directives: [StarComponent]
})
export class AppComponent {
  post = {
    title: "Title",
    isFav: true
  }

  onFavChange(e) {
    console.log(e)
  }
}

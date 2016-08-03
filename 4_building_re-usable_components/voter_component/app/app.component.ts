import { Component } from 'angular2/core';
import { voteComponent } from './vote.component';

@Component({
    selector: 'my-app',
    template: `
      <vote
        [isUp]="vote.isUp"
        [isDown]="vote.isDown"
        [count]="vote.count"
        (change)="onVote($event)"
      ></vote>
    `,
    directives: [voteComponent]
})
export class AppComponent {
  vote = {
    isUp: false,
    isDown: false,
    count:10
  }
  onVote(e) {
    console.log("Hi", e);
    this.vote.count=e.newCount;
  }
}

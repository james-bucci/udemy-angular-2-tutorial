import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { HeartComponent } from './heart.component';

@Component({
  selector: 'tweet',
  templateUrl: 'app/tweet.template.html',
  styles: [`
    .media-object {
      border-radius: 5px;
    }
    .handle {
      color: grey;
    }
  `],
  directives: [HeartComponent]
})

export class TweetComponent {
  // @Input() name;
  // @Input() handle;
  // @Input() tweetContent;
  // @Input() likes;
  @Input() photo;
  @Input() metaData;

  onFavChange(e) {
    console.log(e);
    this.metaData.likes=e.newCount;
  }
}

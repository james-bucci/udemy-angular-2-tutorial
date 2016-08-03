import { Component } from 'angular2/core';
import { TweetsService } from './tweets.service';
import { TweetComponent } from './tweet.component';

@Component({
    selector: 'my-app',
    template: `
    <!-- would be better to have a tweets list component -->
    <ul>
      <li *ngFor="#tweet of tweets; #i = index">
<!--    <tweet
          name={{tweetMeta.name}}
          handle={{tweetMeta.handle}}
          tweetContent={{tweetMeta.tweetContent}}
          likes={{tweetMeta.likes}}
          photo={{i}}
          (change)="onChange($event)"
        ></tweet>-->
        <!--  you pass the whole object-->
        <tweet [metaData]="tweet" [photo]="i"></tweet>
      </li>
    </ul>
    `,
    styles: [`
      ul {
        list-style-type: none;
      }
      li {
        padding-bottom: 10px;
      }
    `],
    providers: [TweetsService],
    directives: [TweetComponent]
})
export class AppComponent {

  tweets; // or tweets: any[];

  constructor(tweetsService: TweetsService) {
    this.tweets = tweetsService.getTweets();
  }
}

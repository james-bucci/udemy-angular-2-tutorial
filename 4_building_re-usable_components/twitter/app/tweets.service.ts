export class TweetsService {
  getTweets(): Object[] { //would get from api
    return [
      {
        name: 'guyOne',
        handle: 'mrGuy',
        tweetContent: 'some 140 char string',
        likes: 0
      },
      {
        name: 'guyTwo',
        handle: 'mrGuy2',
        tweetContent: 'anotherone 140 char string',
        likes: 2
      }
    ]
  }
}

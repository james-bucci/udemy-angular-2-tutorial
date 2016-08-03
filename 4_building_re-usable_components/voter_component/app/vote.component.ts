import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'vote',
  templateUrl: 'app/vote.template.html',
  styles: [`
    i, p {
      font-size: 50px;
    }
    .glyphicon {
      color: #ccc;
      cursor: pointer;
    }
    .orange {
      color: orange;
    }
  `]
  // inputs: ['isFav']
})

export class voteComponent {
  @Input() isUp; //changes private prop to input prop
  @Input() isDown;
  @Input() count;

  @Output() change = new EventEmitter();

  upVote($event) {
    console.log("up")
    let newCount = this.count
    if(!this.isUp){ //TODO  better to store 'myVote as -1,0,1 then add to voteCount'
      newCount++
      this.isUp=false
      if(!this.isDown){
        this.isUp=true
      }
      this.isDown=false
    }
    this.change.emit({ newCount })
  }
  downVote($event) {
    console.log("down")
    let newCount = this.count
    if(!this.isDown){
      newCount--
      this.isDown=false
      if(!this.isUp){
        this.isDown=true
      }
      this.isUp=false
    }
    this.change.emit({ newCount })
  }
}

import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'zippy',
  templateUrl: 'app/zippy.template.html',
  styles: [`
    .zip {
      border: 1px solid lightgrey;
      border-radius: 5px;
    }
    .zip-title, .zip-content {
      padding: 15px;
    }
    .zip-title:hover {
      cursor: pointer;
      background-color: #eee
    }
  `]
})

export class ZippyComponent {
  @Input() title;
  isExpanded=false;
  toggleExpand() {
    this.isExpanded = !this.isExpanded
  }
}

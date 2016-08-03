import { Component, Input, Output, EventEmitter } from 'angular2/core';
import { ZippyComponent } from './zippy.component';

@Component({
  selector: 'accordion',
  template: `
  <div class="accordion">
    <zippy title="This is the title">
      Here is the content
    </zippy>
    <zippy title="This is another title">
      Here is the content 2
    </zippy>
  </div>
  `,
  styles: [`
    .accordion {
      width: 70%;
      margin: 10 auto;
      padding: 10px;
    }
  `],
  directives: [ZippyComponent]
})

export class AccordionComponent {

}

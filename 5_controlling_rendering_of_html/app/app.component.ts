import { Component } from 'angular2/core';
import { AccordionComponent } from './accordion.component';

@Component({
    selector: 'my-app',
    template: `
      <accordion></accordion>
    `,
    directives: [AccordionComponent]
})
export class AppComponent {

}

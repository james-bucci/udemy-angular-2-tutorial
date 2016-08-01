import { Component } from 'angular2/core';
import { CourseService } from './course.service';
import { AutoGrowDirective } from './auto-grow.directive';

@Component({ //decorator
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{ title }}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="#course of courses">
        {{course}}
      </li>
    </ul>
    `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})

export class CoursesComponent {
  title = "The title of the courses page"; // : string
  courses;

  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }
}

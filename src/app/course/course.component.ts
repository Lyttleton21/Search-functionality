import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  everyCouses: Course[] = []

  constructor(public coursesService:CourseService) { }

  ngOnInit(): void {
    this.everyCouses = this.coursesService.allCourses;
    
  }

}

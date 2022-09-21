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

  allCourses:number = this.coursesService.allCourses.length;
  allFreeCourses:number = this.coursesService.allCourses.filter((course) => course.type === "free").length;
  notfreeCourses:number = this.coursesService.allCourses.filter(course => course.type ==='premium').length;

  //@output()
  courseChange:string = 'All-Courses';
  onfilterbuttonChange(data:string){
    this.courseChange = data;
    //console.log(this.courseChange);
  }
}

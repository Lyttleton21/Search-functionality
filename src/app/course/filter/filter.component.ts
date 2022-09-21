import { Component, Input, OnInit } from '@angular/core';
import { CourseService } from 'src/app/course.service';
import { Course } from 'src/app/model/course';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
 // all : number = this.courseSirvice.allCourses.length;
 // free: number = this.courseSirvice.allCourses.filter(course => course.type === "free").length;
 // notFree: number = this.courseSirvice.allCourses.filter(course => course.type === "not_free").length;

 @Input() all!:number;
 @Input() free!:number;
 @Input() not_free!:number;


  constructor(public courseSirvice:CourseService) { }

  ngOnInit(): void {
  }

  

}

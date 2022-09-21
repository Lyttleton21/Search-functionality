import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

 selectedButtonValue: string = 'All-Courses'; 

 @Output() filterButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();
 
onButtonSelectionChange(){
  this.filterButtonSelectionChange.emit(this.selectedButtonValue);
  //console.log(this.selectedButtonValue);
}
  constructor(public courseSirvice:CourseService) { }

  ngOnInit(): void {
  }

  

}
function output() {
  throw new Error('Function not implemented.');
}


import { Injectable } from '@angular/core';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  allCourses: Course[] = [
    {
      id:1,
      text:'We are going to teach you angular basic',
      image:'../assets/Angular.png',
      type:"free",
      price:0,
      title:'angular for beginner'
    },
    {
      id:2,
      text:'We are going to teach you angular basic to intermedite',
      image:'../assets/angular for intermedite.png',
      type:"Not Free",
      price:100,
      title:'angular for intermedite'
    },
    {
      id:3,
      text:'We are going to teach you angular basic to advance',
      image:'../assets/ang for advance.png',
      type:"Not Free",
      price:200,
      title:'angular for advance'
    },
    {
      id:1,
      text:'we are going to teach you angular basic',
      image:'../assets/Angular.png',
      type:"free",
      price:0,
      title:'angular for beginner'
    },
    {
      id:1,
      text:'we are going to teach you angular basic',
      image:'../assets/Angular.png',
      type:"free",
      price:0,
      title:'angular for beginner'
    },
    {
      id:1,
      text:'we are going to teach you angular basic',
      image:'../assets/Angular.png',
      type:"free",
      price:0,
      title:'angular for beginner'
    },
    {
      id:1,
      text:'we are going to teach you angular basic',
      image:'../assets/Angular.png',
      type:"free",
      price:0,
      title:'angular for beginner'
    },
    {
      id:8,
      text:'We are going to teach you angular basic to advance',
      image:'../assets/ang for advance.png',
      type:"Not Free",
      price:200,
      title:'angular for advance'
    }, 
    {
      id:1,
      text:'we are going to teach you angular basic',
      image:'../assets/Angular.png',
      type:"free",
      price:0,
      title:'angular for beginner'
    }
  ]

  constructor() { }
}

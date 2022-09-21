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
      text:'We are going to teach you react from basic to advance',
      image:'../assets/react_advance.png',
      type:"premium",
      price:150,
      title:'react for advance'
    },
    {
      id:3,
      text:'We are going to teach you javascript basic',
      image:'../assets/js_ben.png',
      type:"premium",
      price:50,
      title:'javascript for basic'
    },
    {
      id:4,
      text:'we are going to teach you javascript from basic to advance',
      image:'../assets/js fo advance.png',
      type:"premium",
      price:350,
      title:'javascript for advance'
    },
    {
      id:5,
      text:'we are going to teach you react form basic to intermedite',
      image:'../assets/react_inter.png',
      type:"premium",
      price:100,
      title:'react for intermedite'
    },
    {
      id:6,
      text:'We are going to teach you angular basic to intermedite',
      image:'../assets/angular for intermedite.png',
      type:"premium",
      price:100,
      title:'angular for intermedite'
    },
    {
      id:7,
      text:'we are going to teach you react basic',
      image:'../assets/react for new.png',
      type:"premium",
      price:35,
      title:'react basic'
    },
    {
      id:8,
      text:'We are going to teach you angular basic to advance',
      image:'../assets/ang for advance.png',
      type:"premium",
      price:200,
      title:'angular for advance'
    }, 
    {
      id:9,
      text:'we are going to teach you javascript basic',
      image:'../assets/js_ben.png',
      type:"free",
      price:0,
      title:'javascript basic'
    }
  ]

  constructor() { }
}

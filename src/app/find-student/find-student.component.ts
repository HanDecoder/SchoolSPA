import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-find-student',
  templateUrl: './find-student.component.html',
  styleUrls: ['./find-student.component.css']
})
export class FindStudentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Student[]>("http://localhost:5000/api/students").subscribe((data) => {
      this.stock = data;
      this.doTasks();
    });
    
  }

  doTasks() {
    for(let i = 0; i != this.stock.length; ++i) {
      this.rolls_w_duplicates.push(this.stock[i].roll);
      this.sections_dup.push(this.stock[i].section);
      this.studentClasses_dup.push(this.stock[i].studentClass);
    }
    this.rolls = [...new Set(this.rolls_w_duplicates)].sort();
    this.sections = [...new Set(this.sections_dup)].sort();
    this.studentClasses = [...new Set(this.studentClasses_dup)].sort();
    console.log(this.rolls);
    console.log(this.sections);
  }
  stock: Student[];

  rolls_w_duplicates: number[] = [];
  rolls: number[];
  sections_dup: string[] = [];
  sections: string[] = [];
  studentClasses_dup: number[] = [];
  studentClasses: number[] = [];

  info: {
    name: "",
    roll: null,
    section: "",
    studentClass: null
  }
}

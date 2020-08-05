import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from "../models/student.model";

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.css']
})
export class AllStudentsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStudents();
  }
  getStudents() {
    this.http.get<Student[]>("http://localhost:5000/api/students")
    .subscribe((data) => {this.students = data;})
  }
  findStudent(cls: number, section: string, roll: number) {
    this.http.get<Student>(`http://localhost:5000/api/students/${cls}/${section}/${roll}`).subscribe(data => {
      this.m_student = data; 
    });
  }

  m_roll: number;
  m_section: string;
  m_class: number;

  students: Student[];
  m_student: Student;
  m_student_name: string;
  hovered: boolean = false;
  submited: boolean = false;

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-list-by-class',
  templateUrl: './list-by-class.component.html',
  styleUrls: ['./list-by-class.component.css']
})
export class ListByClassComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getStudents(cls: number) {
    this.http.get<Student[]>(`http://localhost:5000/api/students/${cls}`)
    .subscribe((data) => {this.students = data; this.students.sort()})
  }

  students: Student[];
  m_class: number;

}

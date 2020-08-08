import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListByClassComponent } from './list-by-class/list-by-class.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { FindStudentComponent } from './find-student/find-student.component';
import { GalleryComponent } from "./gallery/gallery.component";
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sortByClass", component: ListByClassComponent},
  {path: "allStudents", component: AllStudentsComponent},
  {path: "filter", component: FindStudentComponent},
  {path: "gallery", component: GalleryComponent},
  {path: "", redirectTo: "/home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

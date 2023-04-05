import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateStudentComponent } from './create-student/create-student.component';
import { GetAllStudentsComponent } from './get-all-students/get-all-students.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



var routes: Routes = [
  {
    path:'getAllStudent', component:GetAllStudentsComponent
  },
  {
    path: 'createStudent',component:CreateStudentComponent
  },
]



@NgModule({
  declarations: [
    CreateStudentComponent,
    GetAllStudentsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentsModule { }

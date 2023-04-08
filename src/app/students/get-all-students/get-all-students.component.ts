import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-students',
  templateUrl: './get-all-students.component.html',
  styleUrls: ['./get-all-students.component.scss']
})
export class GetAllStudentsComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router
  ) {

    this.getAllStudent()
  }


  studArr: any = [];
  studId : any;


  ngOnInit(): void {
  }

  getAllStudent() {
    this.studentService.getAllStudents().subscribe((success) => {
      console.log(success);
      this.studArr = success;
    }, (error) => {
      console.log(error);
    })
  }


  sendStudentId(s: any) {
    this.router.navigate(['../student/createStudent'], {
      queryParams: {
        id: s.id
      }
    });
  }
  deleteStudent(id: any) {
    this.studentService.deleteStudent(id).subscribe((success) => {
      console.log(success);
      this.getAllStudent();

    }, (error) => {
      console.log(error);
    })
  }
}

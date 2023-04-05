import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { StudentService } from 'src/app/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';



@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  constructor(
    private studentService: StudentService,
    private router: Router,
    private actRoute: ActivatedRoute,
  ) { }


  studId : any;


  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      console.log(params);
      this.studId = params;
      if (this.studId) {
        // this.getStudentById();
      }

    })


  }



  studentForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl(),
    age: new FormControl(),
    address: new FormControl(),
    nationality: new FormControl()
  })




  addStudent() {
    let obj: any = [];
    obj = this.studentForm.value;

    this.studentService.createStudent(obj).subscribe((success) => {
      console.log(success);
      // this.studArr = success;
      this.router.navigate(['/student/getAllStudent'])
    }, (error) => {
      console.log(error)
    })
  }
}

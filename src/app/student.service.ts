import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }


  createStudent(obj: any){
    let url = 'http://localhost:2023/student/add';
    return this.http.post(url,obj);
  }

  getAllStudents(){
    let url = 'http://localhost:2023/student/getAllStudents'
    return this.http.get(url);
  }

  // getStudentById(){
    
  // }

}

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

  getStudentById(id: number){
    let url = `http://localhost:2023/student/getById/${id}`
    return this.http.get(url)
  }

  updateStudent(id: number, obj: any){
    let url = 'http://localhost:2023/student/update/';
    return this.http.put(url+id, obj)
  }

  deleteStudent(id: number){
    let url = 'http://localhost:2023/student/delete/';
    return this.http.delete(url+id);
  }

}

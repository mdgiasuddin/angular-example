import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Student {
  constructor(
    public id: number,
    public name: string,
    public schoolName: string,
    public classId: string,
    public schoolRollNo: any,
    public rollNo: any,
    public regNo: any
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url: string = 'http://localhost:9097/';

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getAllStudent(): any {
    return this.httpClient.get<Student[]>(this.url + 'angular/api/student/all');
  }
}

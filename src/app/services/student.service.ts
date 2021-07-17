import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

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

  downloadExcelFile(fileName: string): any {
    // return this.httpClient.get<Student[]>(this.url + 'api/excel/download/test/' + fileName);

    return this.httpClient.get(this.url + 'api/excel/download/test/test.xlsx', {responseType: 'blob'}).pipe(map((response: Blob) => {
      return {
        filename: fileName,
        data: response
      };
    }));
  }
}

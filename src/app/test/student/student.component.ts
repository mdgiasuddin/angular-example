import {Component, OnInit} from '@angular/core';
import {Student, StudentService} from "../../services/student.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  student: Student;
  studentForm: FormGroup;

  constructor(
    private studentService: StudentService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {

    this.studentForm = this.formBuilder.group({});
  }


}

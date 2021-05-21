import {Component, OnInit} from '@angular/core';
import {UserLoginForm} from "../../services/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  loginForm: UserLoginForm;

  constructor() {
  }

  ngOnInit(): void {
    this.loginForm = new UserLoginForm('', '', '');
  }

}

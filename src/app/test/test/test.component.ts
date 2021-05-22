import {Component, OnInit} from '@angular/core';
import {UserLoginForm} from "../../services/test.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConsoleLogService} from "../../services/console-log.service";
import {forbiddenUsernameValidator} from "../../validators/username-validator";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  loginForm: UserLoginForm;
  registrationFrom: FormGroup;

  constructor(
    private consoleLogService: ConsoleLogService,
    private formBuilder: FormBuilder
  ) {
  }

  get username() {
    return this.registrationFrom.get('username');
  }

  ngOnInit(): void {

    // this.registrationFrom = new FormGroup({
    //   username: new FormControl(''),
    //   password: new FormControl(''),
    //   confirmPassword: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     country: new FormControl('')
    //   })
    // });

    this.registrationFrom = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4), forbiddenUsernameValidator(/admin/)]],
      password: [''],
      confirmPassword: [''],
      address: this.formBuilder.group({
        city: [''],
        country: ['']
      })
    });

    this.refreshPage();
  }

  refreshPage(): void {
    this.loginForm = new UserLoginForm('', 'password', 'password', '', '');
    this.loadLoginForm(this.loginForm);
  }

  loadLoginForm(loginForm: UserLoginForm): void {
    this.registrationFrom.patchValue({
      username: loginForm.username,
      password: loginForm.password,
      confirmPassword: loginForm.password,
      // address: {
      //   city: loginForm.city,
      //   country: loginForm.country
      // }
    });
  }

  register(): void {
    const formValue = this.registrationFrom.value;
    this.consoleLogService.logWithMessage('form value', formValue);
    this.loginForm = new UserLoginForm(formValue.username, formValue.password
      , formValue.confirmPassword, formValue.address.city, formValue.address.country);
    this.consoleLogService.logWithMessage('login form', this.loginForm);
  }


}

import {Component, OnInit} from '@angular/core';
import {UserLoginForm} from "../../services/test.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConsoleLogService} from "../../services/console-log.service";
import {ForbiddenUsernameValidator} from "../../validators/username.validator";
import {PasswordValidator} from "../../validators/password.validator";


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
    private formBuilder: FormBuilder,
  ) {
  }

  get username() {
    return this.registrationFrom.get('username');
  }

  get email() {
    return this.registrationFrom.get('email');
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
      username: ['', [Validators.required, Validators.minLength(4), ForbiddenUsernameValidator(/admin/)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: [''],
      subscribe: [false],
      address: this.formBuilder.group({
        city: [''],
        country: ['']
      })
    }, {validator: PasswordValidator});

    this.registrationFrom.get('subscribe')?.valueChanges.subscribe(valueChecked => {
      const email = this.registrationFrom.get('email');
      if (valueChecked) {
        email?.setValidators(Validators.required);
      } else {
        email?.clearValidators();
      }
      email?.updateValueAndValidity();
    });

    this.refreshPage();
  }

  refreshPage(): void {
    this.loginForm = new UserLoginForm('', '', '', '', '');
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

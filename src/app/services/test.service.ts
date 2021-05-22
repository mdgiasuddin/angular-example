import {Injectable} from '@angular/core';


export class UserLoginForm {
  constructor(
    public username: string,
    public password: string,
    public confirmPassword: string,
    public city: string,
    public country: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() {
  }
}

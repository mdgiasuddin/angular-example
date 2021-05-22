import {AbstractControl, ValidatorFn} from "@angular/forms";

export function ForbiddenUsernameValidator(forbiddenUsername: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = forbiddenUsername.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  }

}

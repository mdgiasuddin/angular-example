import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsoleLogService {

  constructor() {
  }

  logWithMessage(message: any, object: any): void {
    console.log('<--------------------' + message + '-------------------->')
    console.log(object);
    console.log('<-------------------- end -------------------->')
  }
}

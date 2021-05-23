import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mat-demo',
  templateUrl: './mat-demo.component.html',
  styleUrls: ['./mat-demo.component.scss']
})
export class MatDemoComponent implements OnInit {

  showSpinner = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  loadData(): void {
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
    }, 5000);
  }

}

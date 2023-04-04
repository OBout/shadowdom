import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom // Enable Shadow DOM encapsulation
})
export class CustomButtonComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
}

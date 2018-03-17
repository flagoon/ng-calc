import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {
  constructor() {}

  @Output() pressButton = new EventEmitter();

  public buttonPressed: string;

  ngOnInit() {}

  calcAndMore(sign) {
    this.buttonPressed = sign;
    this.pressButton.emit(this.buttonPressed);
    console.log(this.buttonPressed);
  }

  addNumber(num) {
    this.buttonPressed = num;
    this.pressButton.emit(this.buttonPressed);
    console.log(this.buttonPressed);
  }

  dotHandler() {
    this.buttonPressed = '.';
    this.pressButton.emit(this.buttonPressed);
    console.log(this.buttonPressed);
  }
}

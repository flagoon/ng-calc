import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.scss']
})
export class CalcButtonComponent implements OnInit {
  constructor() {}

  @Output() pressButton = new EventEmitter();

  ngOnInit() {}

  calcAndMore(sign) {
    this.pressButton.emit(sign);
  }

  addNumber(num) {
    this.pressButton.emit(num);
  }

  dotHandler() {
    this.pressButton.emit('.');
  }
}

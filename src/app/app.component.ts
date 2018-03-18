import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public start = true;
  public value = '';
  public result = 0;
  private currVal: number = null;
  private prevVal: number = null;
  private currSign: string;
  private prevSign: string;
  private signs: string[] = ['-', '+', '/', '*'];

  onInit() {
  }

  handleButtonPressed(character) {
    if (this.signs.indexOf(character) !== -1) {
      this.start = true;
      if (this.currVal === null) {
        this.currSign = character;
        this.prevSign = character;
        this.currVal = Number(this.value);
        console.log(`Current : ${this.currVal}`);
      } else {
        this.prevSign = this.currSign;
        this.currSign = character;
        this.prevVal = this.currVal;
        this.currVal = Number(this.value);
        this.getResult();
        console.log(`Current : ${this.currVal}`);
        console.log(`Previous : ${this.prevVal}`);
        this.value = String(this.result);
        this.currVal = this.result;
      }
    } else if (character === '=') {
      this.prevSign = this.currSign;
      this.currSign = character;
      this.prevVal = this.currVal;
      this.currVal = Number(this.value);
      this.getResult();
      console.log(`Current : ${this.currVal}`);
      console.log(`Previous : ${this.prevVal}`);
      this.value = String(this.result);
      this.currVal = this.result;
    } else if (character === 'ce') {
      this.resetAll();
    } else {
      // NUMBERS;
      this.setValue(character);
    }
  }

  private resetAll(): void {
    this.currVal = null;
    this.prevVal = null;
    this.start = true;
    this.value = '';
    this.result = 0;
  }

  private getResult(): void {
    switch (this.prevSign) {
      case '+': {
        this.result = this.prevVal + this.currVal;
        break;
      }
      case '-': {
        this.result = this.prevVal - this.currVal;
        break;
      }
      case '*': {
        this.result = this.prevVal * this.currVal;
        break;
      }
      case '/': {
        this.result = this.prevVal / this.currVal;
        break;
      }
      default: {
        console.log('Something went wrong!');
      }
    }
  }

  private consoleAll() {
    console.log('result: ' + this.result);
    console.warn('curr: ' + this.currVal);
    console.error('prev: ' + this.prevVal);
  }

  private setValue(bClk) {
    if (this.start) {
      this.value = '';
    }
    this.value += bClk;
    this.start = false;
  }
}

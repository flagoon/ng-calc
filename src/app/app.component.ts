import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value = '0';

  handleButtonPressed(data) {
    this.value = data;
    console.log(this.value);
  }

  private setValue(bClk) {
    this.value += bClk;
  }
}

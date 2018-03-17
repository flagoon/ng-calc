import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { CalcButtonComponent } from './calc-button/calc-button.component';

@NgModule({
  declarations: [AppComponent, ScreenComponent, CalcButtonComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

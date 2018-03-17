import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit {
  constructor() {}
  @Input() value: string;
  public screenValue: string;
  ngOnInit() {
    this.screenValue = this.value;
  }
}

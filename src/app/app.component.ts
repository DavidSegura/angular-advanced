import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'NgZoo';
  public email: string;
  
  constructor() {
    this.email = "";
  }

  ngOnInit(): void {
    this.email = localStorage.getItem("email") || "";
  }

  ngDoCheck(): void {
    this.email = localStorage.getItem("email") || "";
  }
}

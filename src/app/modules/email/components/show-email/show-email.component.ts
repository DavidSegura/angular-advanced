import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-show-email',
  templateUrl: './show-email.component.html',
  styleUrls: ['./show-email.component.css']
})
export class ShowEmailComponent implements OnInit, DoCheck {
  public title: string;
  public email: string;

  constructor() {
    this.title = "Show Email";
    this.email = "";
  }

  ngOnInit(): void {
    this.email = localStorage.getItem("email") || "";
  }

  ngDoCheck(): void {
    this.email = localStorage.getItem("email") || "";
  }

  delEmail(){
    localStorage.removeItem("email");
    localStorage.clear();
    this.email = "";
  }
}

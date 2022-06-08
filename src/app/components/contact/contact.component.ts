import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public email: string;
  public message: string;

  constructor() { 
    this.email = "";
    this.message = "";
  }

  ngOnInit(): void {
  }

  saveEmail() {
    console.log(this.email);
    localStorage.setItem("email", this.email);
    console.log(this.message);
  }
}

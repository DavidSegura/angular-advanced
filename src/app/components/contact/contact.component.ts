import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public email: string;

  constructor() { 
    this.email = "";
  }

  ngOnInit(): void {
  }

  saveEmail() {
    console.log(this.email);
    localStorage.setItem("email", this.email);
  }
}

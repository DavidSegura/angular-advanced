import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save-email',
  templateUrl: './save-email.component.html',
  styleUrls: ['./save-email.component.css']
})
export class SaveEmailComponent implements OnInit {
  public title: string;
  public email: string;

  constructor() { 
    this.title = "Save Email";
    this.email = "";
  }

  ngOnInit(): void {
  }

  saveEmail() {
    localStorage.setItem("email", this.email);
  }
}

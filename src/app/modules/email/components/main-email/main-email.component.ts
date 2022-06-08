import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  templateUrl: './main-email.component.html',
  styleUrls: ['./main-email.component.css']
})
export class MainEmailComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = "Module Email";
  }

  ngOnInit(): void {
    console.log("NgOnInit Main Component");
  }

}

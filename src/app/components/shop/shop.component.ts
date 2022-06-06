import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  public namePark:string;

  constructor() { 
    this.namePark = "";
  }

  ngOnInit(): void {
  }

  showName() {
    console.log(this.namePark);
  }

  showData(event: EventEmitter<JSON>) {
    console.log(event);
  }
}

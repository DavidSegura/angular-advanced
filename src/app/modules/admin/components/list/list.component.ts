import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public animals:Array<any>;

  constructor() {
    this.animals = new Array(5);
   }

  ngOnInit(): void {
  }

}

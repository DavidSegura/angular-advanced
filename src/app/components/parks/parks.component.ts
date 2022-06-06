import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parks',
  templateUrl: './parks.component.html',
  styleUrls: ['./parks.component.css']
})
export class ParksComponent implements OnInit {
  @Input() name: string;
  public meters: number;
  public vegetation: string;
  public open: boolean;
  
  @Output() sendData = new EventEmitter();

  constructor() { 
    this.name = "Natural Park Barcelona";
    this.meters = 400;
    this.vegetation = "Hight";
    this.open = false;
  }

  ngOnInit(): void {
  }

  eventEmitter() {
    this.sendData.emit({
      name: this.name,
      meters: this.meters,
      vegetation: this.vegetation,
      open: this.open
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.scss']
})
export class WeatherComponentComponent implements OnInit {

  city: string = '';
  temp: number = 0.0

  constructor() { }

  ngOnInit(): void {
  }

  clickedEnter() {
    alert(this.city)
  }

}
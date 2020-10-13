import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface WeatherData {
  temp: string;
  temp_max: string;
  temp_min: string;
  condition: string;
}

@Component({
  selector: 'app-weather-component',
  templateUrl: './weather-component.component.html',
  styleUrls: ['./weather-component.component.scss']
})
export class WeatherComponentComponent implements OnInit {

  city: string = ''
  condition: string = ''
  temp: number = 0.0
  temp_max: number = 0.0
  temp_min: number = 0.0

  constructor(private http: HttpClient) {
   }

  getPost()  {
    this.http.get<any>("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=be6801d0b56818b9c53b46afef41f8da").subscribe(data => {
      
      this.temp = data.main.temp
      this.temp_max = data.main.temp_max
      this.temp_min = data.main.temp_min
      this.condition = data.weather[0].main

      alert("Coniditon" + this.condition + "Temp: " + this.temp + "Max: " + this.temp_max + "Min: " + this.temp_min)
      
    })
  }

  ngOnInit(): void {
  }

  clickedSearch() {
    alert(this.city);
    this.httpGet();
    this.getPost();
  }

  httpGet() {

    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&appid=be6801d0b56818b9c53b46afef41f8da",
        {
        })
        .subscribe(
            (val) => {
                console.log("GET Call Success", 
                            val);
            },
            response => {
                console.log("GET Call Error", response);
            },
            () => {
                console.log("GET Call Complete");
            });
    }

}


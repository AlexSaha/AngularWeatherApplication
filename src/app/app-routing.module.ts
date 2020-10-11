import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponentComponent } from './weather-component/weather-component.component';

// Add components here after importing
const routes: Routes = [
  { path: '', component: WeatherComponentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

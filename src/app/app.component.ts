import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StopLightComponent } from './stop-light/stop-light.component';
import { StopLightBulbComponent } from './stop-light/stop-light-bulb/stop-light-bulb.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StopLightComponent, StopLightBulbComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stop-light';
}

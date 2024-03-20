import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperatureConverterComponent } from './temperature-converter/temperature-converter.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemperatureConverterComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'my-temp';
}

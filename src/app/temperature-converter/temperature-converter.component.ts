import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-temperature-converter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './temperature-converter.component.html',
  styleUrl: './temperature-converter.component.css'
})
export class TemperatureConverterComponent {
  celsius: number;
  fahrenheit: number = 0; 

  
  constructor() {
  
    this.celsius = 0;
  }

  convertToCelsius(fahrenheitValue: number) {
    this.celsius = (fahrenheitValue - 32) * 5 / 9;
  }

  convertToFahrenheit(celsiusValue: number) {
    this.fahrenheit = celsiusValue * 9 / 5 + 32;
  }
 }

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-interpolation',
  styleUrl: './interpolation.css',
  templateUrl: './interpolation.html',
})
export class InterpolationFeature {
  // interpolation
  text = 'Welcome to Angular!';

  // property binding
  imageUrl = 'https://angular.io/assets/images/logos/angular/angular.svg';

  // two-way data binding
  name = '';

  // event binding
  onButtonClick() {
    alert('Button was clicked!');
  }
}

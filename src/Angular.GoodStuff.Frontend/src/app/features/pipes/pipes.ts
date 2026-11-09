import { CurrencyPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CurrencyPipe, TitleCasePipe, UpperCasePipe],
  selector: 'app-pipes',
  styleUrl: './pipes.css',
  templateUrl: './pipes.html',
})
export class PipesFeatures {
  exampleText = 'hello';
  exampleNumber = 123.45678;
}

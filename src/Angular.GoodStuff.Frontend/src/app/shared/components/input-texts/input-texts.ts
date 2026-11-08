import { Component, input, output } from '@angular/core';
import type { OnInit } from '@angular/core';
import { User } from '~core/types/user';

@Component({
  imports: [],
  selector: 'app-input-texts',
  styleUrl: './input-texts.css',
  templateUrl: './input-texts.html',
})
export class InputTexts implements OnInit {
  readonly opt = input<number>();
  readonly data = input.required<User>();
  readonly value = input.required<string>();

  outputVal = output<number>();

  text1 = '';
  text2 = '';

  ngOnInit() {
    this.text1 = this.value();
    this.text2 = this.data().name;
    var num = this.opt() ?? 0;
  }

  onBtClick() {
    this.outputVal.emit(9000);
  }
}

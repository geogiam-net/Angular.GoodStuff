import { Component, input } from '@angular/core';
import { InputTexts } from '~shared/components/input-texts/input-texts';
import type { User } from '~core/types/user';

@Component({
  imports: [InputTexts],
  selector: 'app-params',
  styleUrl: './params.css',
  templateUrl: './params.html',
})
export class ParamsFeature {
  userData: User = {
    name: 'john',
    id: '1',
  };

  secondName = 'george';

  outputValChanged(num: number) {
    console.log('outputValChanged:', num);
  }
}

import { Component } from '@angular/core';
import type { User } from '~core/types/user';

@Component({
  imports: [],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class DirectivesFeature {
  isLoggedIn = false;

  // use track for better performance
  users: User[] = [
    {
      name: 'john',
      id: '1',
    },
    {
      name: 'jonathan',
      id: '2',
    },
    {
      name: 'judas',
      id: '3',
    },
  ];

  cars = [];

  case = 1;
}

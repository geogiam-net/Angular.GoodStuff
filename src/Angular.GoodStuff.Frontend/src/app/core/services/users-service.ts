import { Service } from '@angular/core';
import { User } from '~core/types/user';

@Service()
export class UsersService {
  getDevData(): User[] {
    return [
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
  }
}

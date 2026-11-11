import { Service } from '@angular/core';
import { User } from '~core/types/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BACKEND_URLS } from '~core/constants/urls';

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

  getApiData(http: HttpClient): Observable<User[]> {
    return http.get<User[]>(BACKEND_URLS.users);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import type { User } from '~core/types/user';
import { UsersService } from '~core/services/users-service';

@Component({
  imports: [],
  selector: 'app-directives',
  styleUrl: './directives.css',
  templateUrl: './directives.html',
})
export class DirectivesFeature implements OnInit {
  userService = inject(UsersService);

  users: User[] = [];
  cars = [];
  case = 1;
  isLoggedIn = false;

  ngOnInit(): void {
    this.users = this.userService.getDevData();
  }
}

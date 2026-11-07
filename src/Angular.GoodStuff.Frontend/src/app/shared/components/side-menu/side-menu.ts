import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROOT_URLS } from '~core/constants/urls';

@Component({
  imports: [RouterModule],
  selector: 'app-side-menu',
  styleUrl: './side-menu.css',
  templateUrl: './side-menu.html',
})
export class SideMenuComponent {
  readonly rootUrls = ROOT_URLS;
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROOT_URLS } from '~core/constants/urls';

@Component({
  imports: [RouterModule],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class HeaderComponent {
  readonly rootUrls = ROOT_URLS;
}

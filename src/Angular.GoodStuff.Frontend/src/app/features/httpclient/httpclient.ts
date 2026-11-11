import { Component, inject, OnInit, OnDestroy, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '~core/types/article';
import { ArticlesService } from '~core/services/articles-service';
import { UsersService } from '~core/services/users-service';
import { catchError, Subscription, throwError, map } from 'rxjs';
import { User } from '~core/types/user';
import { ArticlesService2 } from '~core/services/articles-service2';

@Component({
  imports: [],
  selector: 'app-httpclient',
  styleUrl: './httpclient.css',
  templateUrl: './httpclient.html',
})
export class HttpclientFeature implements OnInit, OnDestroy {
  private http = inject(HttpClient);
  private artService = inject(ArticlesService);
  artService2 = inject(ArticlesService2);
  private userService = inject(UsersService);

  private artSubscription!: Subscription;
  private userSubscription!: Subscription;

  retrivedArticles = signal<Article[]>([]);
  retrivedUsers = signal<User[]>([]);
  colorState = signal<string>('rojo');

  artIdState = signal<string>('');
  artNameState = signal<string>('');

  retrivedArticles2 = computed(() => {
    const activeColor = this.colorState();
    return this.artService2.allArticles().filter((art) => art.color == activeColor);
  });

  ngOnInit() {
    this.artSubscription = this.artService.getApiData(this.http).subscribe((data) => {
      this.retrivedArticles.set(data);
    });

    this.userSubscription = this.userService
      .getApiData(this.http)
      .pipe(
        catchError((error) => {
          console.error('Error fetching users:', error);
          return throwError(() => new Error('Failed to load users. Please try again later.'));
        }),
        map((data) => {
          this.retrivedUsers.set(data);
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.artSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  onBtClick() {
    if (this.colorState() != 'rojo') {
      this.colorState.set('rojo');
    } else {
      this.colorState.set('azul');
    }
  }

  changeArticleButton() {
    this.artService2.editArticle(this.artIdState(), this.artNameState());
  }

  changeArticleId(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.artIdState.set(inputElement.value);
  }

  changeArticleName(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.artNameState.set(inputElement.value);
  }
}

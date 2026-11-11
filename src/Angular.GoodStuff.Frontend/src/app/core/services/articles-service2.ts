import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '~core/types/article';
import { BACKEND_URLS } from '~core/constants/urls';
import { httpResource } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

// https://angular.dev/guide/http/http-resource
@Service()
export class ArticlesService2 {
  private http = inject(HttpClient);

  private articlesResourse = httpResource<Article[]>(() => BACKEND_URLS.articles, {
    defaultValue: [],
  });

  readonly allArticles = this.articlesResourse.value;

  readonly loading = this.articlesResourse.isLoading;

  readonly error = this.articlesResourse.error;

  reloadAllArticles() {
    this.articlesResourse.reload();
  }

  // another way to do it
  /*
  async saveArticle2(article: Article) {
    await firstValueFrom(this.http.post(BACKEND_URLS.articles, article));
    this.reloadAllArticles();
  }
  */

  async saveArticle(article: Article) {
    const response = await fetch(BACKEND_URLS.articles, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(article),
    });

    if (!response.ok) {
      throw new Error('Failed to save article');
    }

    this.reloadAllArticles();
  }

  async editArticle(id: string, newName: string) {
    const url = new URL(BACKEND_URLS.editArticles.replace('{id}', encodeURIComponent(id)));
    url.searchParams.set('name', newName);

    const response = await fetch(url, { method: 'PUT' });

    if (!response.ok) {
      const details = await response.text();
      throw new Error(details || `Failed to edit article (${response.status})`);
    }

    this.reloadAllArticles();
  }
}

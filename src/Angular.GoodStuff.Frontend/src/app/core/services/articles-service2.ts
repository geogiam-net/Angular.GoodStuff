import { Service } from '@angular/core';
import { Article } from '~core/types/article';
import { BACKEND_URLS } from '~core/constants/urls';
import { httpResource } from '@angular/common/http';

// https://angular.dev/guide/http/http-resource
@Service()
export class ArticlesService2 {
  private articlesResourse = httpResource<Article[]>(() => BACKEND_URLS.articles, {
    defaultValue: [],
  });

  readonly allArticles = this.articlesResourse.value;

  readonly loading = this.articlesResourse.isLoading;

  readonly error = this.articlesResourse.error;

  reloadAllArticles() {
    this.articlesResourse.reload();
  }
}

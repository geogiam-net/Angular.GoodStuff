import { Component, signal, inject, OnInit, computed } from '@angular/core';
import { ArticlesService } from '~core/services/articles-service';
import { Article } from '~core/types/article';

@Component({
  imports: [],
  selector: 'app-signals',
  styleUrl: './signals.css',
  templateUrl: './signals.html',
})
export class SignalsFeature implements OnInit {
  artService = inject(ArticlesService);

  colorState = signal<string>('rojo');

  articles: Article[] = [];

  renderedArticles = computed(() => {
    const activeColor = this.colorState();
    return this.articles.filter((art) => art.color == activeColor);
  });

  ngOnInit(): void {
    this.articles = this.artService.getDevData();
  }

  onBtClick() {
    // this.testState.set('new val');
    // this.testState.update(previous => 'new val');

    if (this.colorState() != 'rojo') {
      this.colorState.set('rojo');
    } else {
      this.colorState.set('azul');
    }
  }
}

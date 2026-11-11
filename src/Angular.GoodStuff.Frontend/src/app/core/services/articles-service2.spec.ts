import { TestBed } from '@angular/core/testing';
import { ArticlesService2 } from './articles-service2';

describe('ArticlesService2', () => {
  let service: ArticlesService2;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesService2);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

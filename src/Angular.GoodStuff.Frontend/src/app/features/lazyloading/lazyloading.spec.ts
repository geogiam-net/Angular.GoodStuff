import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LazyloadingFeature } from './lazyloading';

describe('LazyloadingFeature', () => {
  let component: LazyloadingFeature;
  let fixture: ComponentFixture<LazyloadingFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LazyloadingFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(LazyloadingFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

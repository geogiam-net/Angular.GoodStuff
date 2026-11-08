import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConditionalCssFeature } from './conditional-css';

describe('ConditionalCssFeature', () => {
  let component: ConditionalCssFeature;
  let fixture: ComponentFixture<ConditionalCssFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalCssFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(ConditionalCssFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

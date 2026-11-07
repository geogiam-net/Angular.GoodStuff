import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterpolationFeature } from './interpolation';

describe('InterpolationFeature', () => {
  let component: InterpolationFeature;
  let fixture: ComponentFixture<InterpolationFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolationFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(InterpolationFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

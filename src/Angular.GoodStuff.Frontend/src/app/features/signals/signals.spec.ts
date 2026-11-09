import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignalsFeature } from './signals';

describe('SignalsFeature', () => {
  let component: SignalsFeature;
  let fixture: ComponentFixture<SignalsFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(SignalsFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

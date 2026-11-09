import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LifeCycleFeature } from './life-cycle';

describe('LifeCycleFeature', () => {
  let component: LifeCycleFeature;
  let fixture: ComponentFixture<LifeCycleFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(LifeCycleFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

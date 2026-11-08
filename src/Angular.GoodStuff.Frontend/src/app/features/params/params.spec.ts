import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamsFeature } from './params';

describe('ParamsFeature', () => {
  let component: ParamsFeature;
  let fixture: ComponentFixture<ParamsFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParamsFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(ParamsFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

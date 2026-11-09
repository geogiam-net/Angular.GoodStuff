import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PipesFeatures } from './pipes';

describe('PipesFeatures', () => {
  let component: PipesFeatures;
  let fixture: ComponentFixture<PipesFeatures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipesFeatures],
    }).compileComponents();

    fixture = TestBed.createComponent(PipesFeatures);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

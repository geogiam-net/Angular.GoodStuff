import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectivesFeature } from './directives';

describe('DirectivesFeature', () => {
  let component: DirectivesFeature;
  let fixture: ComponentFixture<DirectivesFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectivesFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(DirectivesFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

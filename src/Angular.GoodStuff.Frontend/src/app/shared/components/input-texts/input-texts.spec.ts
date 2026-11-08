import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputTexts } from './input-texts';

describe('InputTexts', () => {
  let component: InputTexts;
  let fixture: ComponentFixture<InputTexts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputTexts],
    }).compileComponents();

    fixture = TestBed.createComponent(InputTexts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpclientFeature } from './httpclient';

describe('HttpclientFeature', () => {
  let component: HttpclientFeature;
  let fixture: ComponentFixture<HttpclientFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpclientFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(HttpclientFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

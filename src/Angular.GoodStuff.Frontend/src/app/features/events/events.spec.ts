import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsFeature } from './events';

describe('EventsFeature', () => {
  let component: EventsFeature;
  let fixture: ComponentFixture<EventsFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(EventsFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

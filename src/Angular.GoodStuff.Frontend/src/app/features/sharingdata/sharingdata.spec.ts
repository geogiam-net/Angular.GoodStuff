import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharingdataFeature } from './sharingdata';

describe('SharingdataFeature', () => {
  let component: SharingdataFeature;
  let fixture: ComponentFixture<SharingdataFeature>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharingdataFeature],
    }).compileComponents();

    fixture = TestBed.createComponent(SharingdataFeature);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

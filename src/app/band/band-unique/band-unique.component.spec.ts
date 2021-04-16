import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandUniqueComponent } from './band-unique.component';

describe('BandUniqueComponent', () => {
  let component: BandUniqueComponent;
  let fixture: ComponentFixture<BandUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

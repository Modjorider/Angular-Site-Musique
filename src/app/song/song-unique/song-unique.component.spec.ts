import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongUniqueComponent } from './song-unique.component';

describe('SongUniqueComponent', () => {
  let component: SongUniqueComponent;
  let fixture: ComponentFixture<SongUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SongUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SongUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumUniqueComponent } from './album-unique.component';

describe('AlbumUniqueComponent', () => {
  let component: AlbumUniqueComponent;
  let fixture: ComponentFixture<AlbumUniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumUniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumUniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

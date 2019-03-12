import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoeiraSongsComponent } from './capoeira-songs.component';

describe('CapoeiraSongsComponent', () => {
  let component: CapoeiraSongsComponent;
  let fixture: ComponentFixture<CapoeiraSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoeiraSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoeiraSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

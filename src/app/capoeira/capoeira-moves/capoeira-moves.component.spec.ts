import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoeiraMovesComponent } from './capoeira-moves.component';

describe('CapoeiraMovesComponent', () => {
  let component: CapoeiraMovesComponent;
  let fixture: ComponentFixture<CapoeiraMovesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoeiraMovesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoeiraMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

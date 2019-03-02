import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoeiraComponent } from './capoeira.component';

describe('CapoeiraComponent', () => {
  let component: CapoeiraComponent;
  let fixture: ComponentFixture<CapoeiraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoeiraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

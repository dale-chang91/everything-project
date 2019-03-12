import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapoeiraFlowGeneratorComponent } from './capoeira-flow-generator.component';

describe('CapoeiraFlowGeneratorComponent', () => {
  let component: CapoeiraFlowGeneratorComponent;
  let fixture: ComponentFixture<CapoeiraFlowGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapoeiraFlowGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapoeiraFlowGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

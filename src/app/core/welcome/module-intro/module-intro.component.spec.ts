import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleIntroComponent } from './module-intro.component';

describe('ModuleIntroComponent', () => {
  let component: ModuleIntroComponent;
  let fixture: ComponentFixture<ModuleIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerOrganizationComponent } from './computer-organization.component';

describe('ComputerOrganizationComponent', () => {
  let component: ComputerOrganizationComponent;
  let fixture: ComponentFixture<ComputerOrganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerOrganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerOrganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

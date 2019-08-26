import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkertesthomeComponent } from './workertesthome.component';

describe('WorkertesthomeComponent', () => {
  let component: WorkertesthomeComponent;
  let fixture: ComponentFixture<WorkertesthomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkertesthomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkertesthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedjobsComponent } from './completedjobs.component';

describe('CompletedjobsComponent', () => {
  let component: CompletedjobsComponent;
  let fixture: ComponentFixture<CompletedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

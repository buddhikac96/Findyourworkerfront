import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingjobsComponent } from './upcomingjobs.component';

describe('UpcomingjobsComponent', () => {
  let component: UpcomingjobsComponent;
  let fixture: ComponentFixture<UpcomingjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcomingjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

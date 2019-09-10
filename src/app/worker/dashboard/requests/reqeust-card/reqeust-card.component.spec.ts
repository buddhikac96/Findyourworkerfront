import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqeustCardComponent } from './reqeust-card.component';

describe('ReqeustCardComponent', () => {
  let component: ReqeustCardComponent;
  let fixture: ComponentFixture<ReqeustCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqeustCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqeustCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

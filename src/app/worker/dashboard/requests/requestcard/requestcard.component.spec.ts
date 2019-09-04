import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestcardComponent } from './requestcard.component';

describe('RequestcardComponent', () => {
  let component: RequestcardComponent;
  let fixture: ComponentFixture<RequestcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

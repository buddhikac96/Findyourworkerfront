import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklaterComponent } from './booklater.component';

describe('BooklaterComponent', () => {
  let component: BooklaterComponent;
  let fixture: ComponentFixture<BooklaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooklaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

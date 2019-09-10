import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingjobsComponent } from './ongoingjobs.component';

describe('OngoingjobsComponent', () => {
  let component: OngoingjobsComponent;
  let fixture: ComponentFixture<OngoingjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

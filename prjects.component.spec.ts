import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrjectsComponent } from './prjects.component';

describe('PrjectsComponent', () => {
  let component: PrjectsComponent;
  let fixture: ComponentFixture<PrjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

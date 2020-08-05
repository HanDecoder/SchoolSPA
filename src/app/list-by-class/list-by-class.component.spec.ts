import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListByClassComponent } from './list-by-class.component';

describe('ListByClassComponent', () => {
  let component: ListByClassComponent;
  let fixture: ComponentFixture<ListByClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListByClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListByClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

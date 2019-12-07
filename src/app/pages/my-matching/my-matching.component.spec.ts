import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMatchingComponent } from './my-matching.component';

describe('MyMatchingComponent', () => {
  let component: MyMatchingComponent;
  let fixture: ComponentFixture<MyMatchingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMatchingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMatchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

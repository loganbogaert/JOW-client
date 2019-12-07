import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAndRequestListComponent } from './profile-and-request-list.component';

describe('ProfileAndRequestListComponent', () => {
  let component: ProfileAndRequestListComponent;
  let fixture: ComponentFixture<ProfileAndRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAndRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAndRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

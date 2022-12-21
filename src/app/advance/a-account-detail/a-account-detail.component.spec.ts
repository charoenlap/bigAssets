import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccountDetailComponent } from './a-account-detail.component';

describe('AAccountDetailComponent', () => {
  let component: AAccountDetailComponent;
  let fixture: ComponentFixture<AAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

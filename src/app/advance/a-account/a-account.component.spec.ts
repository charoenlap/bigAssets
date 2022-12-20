import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AAccountComponent } from './a-account.component';

describe('AAccountComponent', () => {
  let component: AAccountComponent;
  let fixture: ComponentFixture<AAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

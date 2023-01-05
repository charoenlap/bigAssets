import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyRequestEditComponent } from './c-my-request-edit.component';

describe('CMyRequestEditComponent', () => {
  let component: CMyRequestEditComponent;
  let fixture: ComponentFixture<CMyRequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMyRequestEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMyRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

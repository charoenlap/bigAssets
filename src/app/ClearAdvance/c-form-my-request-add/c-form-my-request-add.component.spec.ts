import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFormMyRequestAddComponent } from './c-form-my-request-add.component';

describe('CFormMyRequestAddComponent', () => {
  let component: CFormMyRequestAddComponent;
  let fixture: ComponentFixture<CFormMyRequestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFormMyRequestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFormMyRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyRequestDetailComponent } from './c-my-request-detail.component';

describe('CMyRequestDetailComponent', () => {
  let component: CMyRequestDetailComponent;
  let fixture: ComponentFixture<CMyRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMyRequestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMyRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

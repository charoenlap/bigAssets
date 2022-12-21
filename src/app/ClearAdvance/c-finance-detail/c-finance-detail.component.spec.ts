import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFinanceDetailComponent } from './c-finance-detail.component';

describe('CFinanceDetailComponent', () => {
  let component: CFinanceDetailComponent;
  let fixture: ComponentFixture<CFinanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFinanceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFinanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

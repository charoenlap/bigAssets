import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CFinanceComponent } from './c-finance.component';

describe('CFinanceComponent', () => {
  let component: CFinanceComponent;
  let fixture: ComponentFixture<CFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CFinanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFinanceDetailComponent } from './a-finance-detail.component';

describe('AFinanceDetailComponent', () => {
  let component: AFinanceDetailComponent;
  let fixture: ComponentFixture<AFinanceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFinanceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFinanceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

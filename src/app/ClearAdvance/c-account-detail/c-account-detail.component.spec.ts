import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccountDetailComponent } from './c-account-detail.component';

describe('CAccountDetailComponent', () => {
  let component: CAccountDetailComponent;
  let fixture: ComponentFixture<CAccountDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAccountDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAccountDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

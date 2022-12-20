import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAccountComponent } from './c-account.component';

describe('CAccountComponent', () => {
  let component: CAccountComponent;
  let fixture: ComponentFixture<CAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

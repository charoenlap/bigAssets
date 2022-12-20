import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyRequestComponent } from './c-my-request.component';

describe('CMyRequestComponent', () => {
  let component: CMyRequestComponent;
  let fixture: ComponentFixture<CMyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMyRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

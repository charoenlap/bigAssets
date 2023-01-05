import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CMyRequestAddComponent } from './c-my-request-add.component';

describe('CMyRequestAddComponent', () => {
  let component: CMyRequestAddComponent;
  let fixture: ComponentFixture<CMyRequestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CMyRequestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CMyRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

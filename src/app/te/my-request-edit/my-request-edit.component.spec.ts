import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestEditComponent } from './my-request-edit.component';

describe('MyRequestEditComponent', () => {
  let component: MyRequestEditComponent;
  let fixture: ComponentFixture<MyRequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

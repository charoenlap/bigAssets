import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestAddComponent } from './my-request-add.component';

describe('MyRequestAddComponent', () => {
  let component: MyRequestAddComponent;
  let fixture: ComponentFixture<MyRequestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRequestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

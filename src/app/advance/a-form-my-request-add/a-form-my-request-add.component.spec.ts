import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AFormMyRequestAddComponent } from './a-form-my-request-add.component';

describe('AFormMyRequestAddComponent', () => {
  let component: AFormMyRequestAddComponent;
  let fixture: ComponentFixture<AFormMyRequestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AFormMyRequestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AFormMyRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMyRequestEditComponent } from './a-my-request-edit.component';

describe('AMyRequestEditComponent', () => {
  let component: AMyRequestEditComponent;
  let fixture: ComponentFixture<AMyRequestEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMyRequestEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMyRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

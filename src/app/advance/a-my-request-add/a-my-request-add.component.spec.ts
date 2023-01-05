import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMyRequestAddComponent } from './a-my-request-add.component';

describe('AMyRequestAddComponent', () => {
  let component: AMyRequestAddComponent;
  let fixture: ComponentFixture<AMyRequestAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMyRequestAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMyRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

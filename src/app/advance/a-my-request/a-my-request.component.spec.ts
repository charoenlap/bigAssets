import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AMyRequestComponent } from './a-my-request.component';

describe('AMyRequestComponent', () => {
  let component: AMyRequestComponent;
  let fixture: ComponentFixture<AMyRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AMyRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AMyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

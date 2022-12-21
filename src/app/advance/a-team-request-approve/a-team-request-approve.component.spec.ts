import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATeamRequestApproveComponent } from './a-team-request-approve.component';

describe('ATeamRequestApproveComponent', () => {
  let component: ATeamRequestApproveComponent;
  let fixture: ComponentFixture<ATeamRequestApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATeamRequestApproveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATeamRequestApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

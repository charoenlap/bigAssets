import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATeamRequestComponent } from './a-team-request.component';

describe('ATeamRequestComponent', () => {
  let component: ATeamRequestComponent;
  let fixture: ComponentFixture<ATeamRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATeamRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATeamRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

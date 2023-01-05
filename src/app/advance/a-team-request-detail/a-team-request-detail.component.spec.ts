import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ATeamRequestDetailComponent } from './a-team-request-detail.component';

describe('ATeamRequestDetailComponent', () => {
  let component: ATeamRequestDetailComponent;
  let fixture: ComponentFixture<ATeamRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ATeamRequestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ATeamRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

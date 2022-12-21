import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTeamRequestDetailComponent } from './c-team-request-detail.component';

describe('CTeamRequestDetailComponent', () => {
  let component: CTeamRequestDetailComponent;
  let fixture: ComponentFixture<CTeamRequestDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTeamRequestDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTeamRequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

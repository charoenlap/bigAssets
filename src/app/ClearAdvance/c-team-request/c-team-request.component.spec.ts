import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CTeamRequestComponent } from './c-team-request.component';

describe('CTeamRequestComponent', () => {
  let component: CTeamRequestComponent;
  let fixture: ComponentFixture<CTeamRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CTeamRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CTeamRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

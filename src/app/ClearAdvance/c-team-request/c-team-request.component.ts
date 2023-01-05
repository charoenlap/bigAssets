import { Component } from '@angular/core';

@Component({
  selector: 'app-c-team-request',
  templateUrl: './c-team-request.component.html',
  styleUrls: ['./c-team-request.component.scss']
})
export class CTeamRequestComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approve",advanceNo:"ABC123456789"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approve",advanceNo:"ABC123456789"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approve",advanceNo:"ABC123456789"}
    ];
  }
}

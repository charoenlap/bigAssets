import { Component } from '@angular/core';

@Component({
  selector: 'app-a-team-request',
  templateUrl: './a-team-request.component.html',
  styleUrls: ['./a-team-request.component.scss']
})
export class ATeamRequestComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approve"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approve"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approve"}
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-team-request',
  templateUrl: './team-request.component.html',
  styleUrls: ['./team-request.component.scss']
})
export class TeamRequestComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"E202210111",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approval"},
      {claim:"E202210112",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approval"},
      {claim:"E202210113",date:"16-12-22",ini:"ADR",amount:"400",status:"Waiting Approval"}
    ];
  }
}

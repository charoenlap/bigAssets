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
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"}
    ];
  }
}

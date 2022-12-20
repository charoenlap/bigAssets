import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"E202210111",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"},
      {claim:"E202210111",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"},
      {claim:"E202210111",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"}
    ];
  }
}

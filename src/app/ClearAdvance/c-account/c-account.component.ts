import { Component } from '@angular/core';

@Component({
  selector: 'app-c-account',
  templateUrl: './c-account.component.html',
  styleUrls: ['./c-account.component.scss']
})
export class CAccountComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve",description:"test",advanceNo:"ABC123456789"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve",description:"test",advanceNo:"ABC123456789"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve",description:"test",advanceNo:"ABC123456789"}
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-c-finance',
  templateUrl: './c-finance.component.html',
  styleUrls: ['./c-finance.component.scss']
})
export class CFinanceComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve",description:"test test"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve",description:"test test"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve",description:"test test"}
    ];
  }
}

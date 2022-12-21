import { Component } from '@angular/core';

@Component({
  selector: 'app-a-finance',
  templateUrl: './a-finance.component.html',
  styleUrls: ['./a-finance.component.scss']
})
export class AFinanceComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"}
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-a-account',
  templateUrl: './a-account.component.html',
  styleUrls: ['./a-account.component.scss']
})
export class AAccountComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"Approve"}
    ];
  }
}

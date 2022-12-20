import { Component } from '@angular/core';

@Component({
  selector: 'app-c-my-request',
  templateUrl: './c-my-request.component.html',
  styleUrls: ['./c-my-request.component.scss']
})
export class CMyRequestComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"}
    ];
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-my-request',
  templateUrl: './my-request.component.html',
  styleUrls: ['./my-request.component.scss']
})
export class MyRequestComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"ABC123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"ABC123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"draft"},
      {claim:"ABC123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"new"}
    ];
  }
  async delete(){
    
  }
}

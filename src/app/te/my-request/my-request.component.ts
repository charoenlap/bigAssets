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
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"12345",date:"16-12-22",ini:"ADR",amount:"400",status:"new"}
    ];
  }
  async delete(){
    alert('Do you want to delete ?');
  }
}

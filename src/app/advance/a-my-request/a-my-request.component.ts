import { Component } from '@angular/core';

@Component({
  selector: 'app-a-my-request',
  templateUrl: './a-my-request.component.html',
  styleUrls: ['./a-my-request.component.scss']
})
export class AMyRequestComponent {
  data:any = [];
  ngOnInit(){
    this.data = [
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"new"},
      {claim:"A123456789",date:"16-12-22",ini:"ADR",amount:"400",status:"new"}
    ];
  }
}

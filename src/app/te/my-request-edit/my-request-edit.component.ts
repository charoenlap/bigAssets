import { Component } from '@angular/core';

@Component({
  selector: 'app-my-request-edit',
  templateUrl: './my-request-edit.component.html',
  styleUrls: ['./my-request-edit.component.scss']
})
export class MyRequestEditComponent {
  showElement = false;
 
  async onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.value;
    if(selectedOption == '3'){
      this.showElement = !this.showElement;
    }else if(selectedOption == "no"){
      this.showElement = false;
    }
  }
}

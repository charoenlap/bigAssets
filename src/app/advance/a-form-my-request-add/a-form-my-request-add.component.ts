import { Component } from '@angular/core';

@Component({
  selector: 'app-a-form-my-request-add',
  templateUrl: './a-form-my-request-add.component.html',
  styleUrls: ['./a-form-my-request-add.component.scss']
})
export class AFormMyRequestAddComponent {
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

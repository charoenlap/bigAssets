import { Component } from '@angular/core';

@Component({
  selector: 'app-a-form-my-request-add',
  templateUrl: './a-form-my-request-add.component.html',
  styleUrls: ['./a-form-my-request-add.component.scss']
})
export class AFormMyRequestAddComponent {
  showEmployee = false;
  showVendor = false;
  async onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.value;
    if(selectedOption == "employee"){
      this.showEmployee = true;
      this.showVendor = false;
    }else if(selectedOption == "vendor"){
      this.showEmployee = false;
      this.showVendor = true;
    }else{
      this.showEmployee = false;
      this.showVendor = false;
    }
  }
}

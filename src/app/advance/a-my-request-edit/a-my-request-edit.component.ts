import { Component } from '@angular/core';

@Component({
  selector: 'app-a-my-request-edit',
  templateUrl: './a-my-request-edit.component.html',
  styleUrls: ['./a-my-request-edit.component.scss']
})
export class AMyRequestEditComponent {
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

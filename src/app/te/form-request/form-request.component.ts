import { Component } from '@angular/core';

@Component({
  selector: 'app-form-request',
  templateUrl: './form-request.component.html',
  styleUrls: ['./form-request.component.scss']
})
export class FormRequestComponent {
  showElement = false;
  showTravelling = true;
  showExpense = false;

  async onOptionChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedOption = selectElement.value;
    if(selectedOption == '3'){
      this.showElement = !this.showElement;
    }else if(selectedOption == "no"){
      this.showElement = false;
    }
  }
  async deleteImage(){
    
  }

  // async onTypeChange(event: Event){
  //   const selectElement = event.target as HTMLSelectElement;
  //   const value = selectElement.value;
  //   if(value == "travelling"){
  //     this.showTravelling = true;
  //     this.showExpense = false;
  //   }else if(value == "expense"){
  //     this.showExpense = true;
  //     this.showTravelling = false;
  //   }
  // }
}

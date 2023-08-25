import { Component } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  checkoutForm: FormGroup = new FormGroup({
    name: new FormControl('Abhinandan', [Validators.required, Validators.minLength(4),]),
    email: new FormControl('test@gmail.com', {updateOn : 'change',validators:[Validators.required]}),
    address: new FormArray([]),
  }, {updateOn: 'submit'});


  get addressObj(){
    return this.checkoutForm.get('address') as FormArray;

  }


  newAddress(){
   return new FormGroup({
      city : new FormControl('Hyderabad', [Validators.required]),
      pincode: new FormControl(null, [this.zipcodeValidator()]),
    });
  }

  addAddress(){
    this.addressObj.push(this.newAddress());
  }

  removeAddress(index : number){
    this.addressObj.removeAt(index);
  }


  zipcodeValidator() {
    return (control: AbstractControl) => {
      if (control.value == 123456) {
        // valid
        return null;
      }
      // invalid
      return {
        // name_of_error:information_related_to_error
        zipcode: {
          validCode: 123456,
          enteredCode: control.value,
        },
      };
    };
  }

  saveData(){
    if(this.checkoutForm.valid){
      console.log("Form Submission Logic", this.checkoutForm.value);
    }
  }

  loadData(){
    const data = {
      name:'test',
      email:"test@gmail.com",
      address:{
        city:'new city',
        pincode: "123456",
      }
    }
    this.checkoutForm.setValue(data);
  }
  patchData(){
    const data = {
      name:'test2',
      email:"test2@gmail.com",
    }
    this.checkoutForm.patchValue(data);
  }
}

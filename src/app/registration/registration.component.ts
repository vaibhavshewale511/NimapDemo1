import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  [x: string]: any;
  isPopupVisible = false;
  router: any;
  validateImageFile: any;

  // Method to open the popup form

  openPopup() {
    
    this.isPopupVisible = true;
  }

  // Method to close the popup form
  closePopup() {
    this.isPopupVisible = false;
  }
  myForm: FormGroup |any ={};
  age: number = 18;
  userForm: any;

  constructor(private formBuilder: FormBuilder, private service:CommonService,  router: Router) { }
  randomImageUrl:any = "https://identix.state.gov/qotw/images/no-photo.gif"
  imageUrl!: string | ArrayBuffer | any;

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
     
      name: ['', Validators.required],
     
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      age: ['', Validators.required],
      homeAddress: [''],
      companyAddress: [''],
      state: [''],
      country: [''],
      tags: [''],
    
    

    });
  }

  submitForm() {
    if (this.myForm.valid) {
      const formData = this.myForm.value;
      // Make an HTTP post request to save the form data to a JSON file
      
      this['http'].post('db.json', formData)
        .subscribe(
          (          response: any) => {
            console.log('Form data submitted successfully:', response);
            // Optionally, reset the form after successful submission
            this.myForm.reset();
          },
          (          error: any) => {
            console.error('Error submitting form data:', error);
            
          }
        );
    }

}
}
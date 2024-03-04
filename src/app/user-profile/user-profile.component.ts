import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


interface User {
  name: string;
  email: string;
  country: string;
  mobile: string;
  tags: string;
  photoUrl: string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: any ={
    country: '',
    mobile: '',
    tags: '',
    photoUrl: 'https://images.unsplash.com/photo-1605488770576-8ac43c6a707d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' // Provide a default photo URL
  };
  editMode = false;

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  saveChanges() {
    // Implement logic to save changes to backend
    this.editMode = false;
  }

  cancelEdit() {
    // Reset form fields or revert changes
    this.editMode = false;
  }

  changePhoto() {
    // Implement logic to change user's photo
  }

  handlePhotoChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      // Display the uploaded image
      this.user.photoUrl = e.target.result;
    };
    reader.readAsDataURL(file);
  }
  
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  userForm!:FormGroup

  constructor(private fb : FormBuilder){
    this.userForm = this.fb.group({
      username:['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
  }

  submitForm(){
    if(this.userForm.valid){
      console.log(this.userForm.value);

    }
  }
}

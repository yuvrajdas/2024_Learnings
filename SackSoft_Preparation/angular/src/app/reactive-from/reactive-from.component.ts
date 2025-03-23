import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent {

  userForm!:FormGroup;
  username!:string;
  constructor(private fb:FormBuilder, private us:UserService){
    this.username = this.us.userName
    this.userForm = this.fb.group({
      username:['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    })
  }

  submitFrom(){
    console.log(this.userForm.value);

  }
}

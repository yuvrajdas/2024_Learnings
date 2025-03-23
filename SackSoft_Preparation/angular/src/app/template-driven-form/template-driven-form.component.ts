import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {

  userForm!:NgForm
  username!:string;
  email!:string;
  password!:string;

  submitForm(userFrom:NgForm){
    console.log(userFrom);

  }

}

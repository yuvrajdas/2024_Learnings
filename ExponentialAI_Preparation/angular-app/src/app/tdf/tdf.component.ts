import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
export interface IUser{
  username:string;
  email:string;
  password:string;
}
@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent {

  title:string = 'template driven form'
  user:IUser = {username:'', email:'', password:''}

  submitFrom(user:IUser){
    console.log(user);

  }
}

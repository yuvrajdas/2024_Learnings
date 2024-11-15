import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  topics:Array<string> = ['Of Operator', 'From Operator', 'fromEvent']
  
  constructor(private route : Router){}


  selectTopic(event:any){
    console.log(event.target.value.replace(" ", "_"));
    this.route.navigate([`${event.target.value.replace(" ", "_")}`])
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  topics:Array<string> = ['Pub-Sub-Library','Of Operator', 'From Operator', 'fromEvent', 'individual-functionality']
  
  constructor(private route : Router){}


  selectTopic(event:any){
    this.route.navigate([`${event.target.value.replace(" ", "_")}`])
  }
}

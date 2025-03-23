import { HttpClient } from '@angular/common/http';
import { Component, HostBinding, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'angular';

  @HostBinding('style.backgrounColor') bgColor = 'red'
  // @HostListener('click')
  // clickEvent(){
  //   alert('hi')
  // }
  constructor(private http:HttpClient){
  }

  ngOnInit(){
    // this.http.get('http://jsonplaceholder.com/users').subscribe((res)=>{
    //   console.log(res);
    // })
  }

}

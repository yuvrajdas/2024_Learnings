import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.scss']
})
export class ObservablePromiseComponent {

  observal = new Observable((ob)=>{
    console.log("Observale start");
    ob.next('a');
    ob.next('b');
    ob.next('c')
  });

  promise = new Promise((resolve)=>{
    console.log('Promise start');
    resolve('Success')
  })

  ngOnInit(){
    // this.observal.subscribe((res)=>{
    //   console.log(res);

    // })

    // this.promise.then((re)=>{
    //   console.log(re);

    // })
  }
}

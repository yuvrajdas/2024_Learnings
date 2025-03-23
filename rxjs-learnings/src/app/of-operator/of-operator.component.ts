import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of-operator',
  templateUrl: './of-operator.component.html',
})
export class OfOperatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.convertSingleValueIntoObservale()
    this.convertMultipleValuesIntoObs()
  }

  /**
   * OF Operator : converts into an observable of any value
   * 
   */

  convertSingleValueIntoObservale(){
    let intVal = 12;
    let obs$ = of(intVal)

    obs$.subscribe(console.log);
    
  }

  convertMultipleValuesIntoObs(){
    
    let obs$ = of(12, true, 'string value')
  }

}

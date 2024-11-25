import { Component, OnInit } from '@angular/core';
import { interval, range, timer } from 'rxjs';

@Component({
  selector: 'app-individual-functionality',
  templateUrl: './individual-functionality.component.html',
})
export class IndividualFunctionalityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // interval(1000).subscribe(console.log)
    // timer(1000, 1000).subscribe(console.log);


    // generate a ranged value first parameter range from where to start, second parameter how many number want to generate. it is syncronously generate the range.
    range(50, 5).subscribe(console.log);
    
  }

}

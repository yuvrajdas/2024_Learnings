import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-pub-sub-library',
  templateUrl: './pub-sub-library.component.html',
})
export class PubSubLibraryComponent {

  obs = new Observable();

  ngOnInit(): void {
  }
}

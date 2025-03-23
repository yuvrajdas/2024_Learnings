import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { FromEventComponent } from './from-event/from-event.component';
import { PubSubLibraryComponent } from './pub-sub-library/pub-sub-library.component';
import { IndividualFunctionalityComponent } from './individual-functionality/individual-functionality.component';

const routes: Routes = [
  {
    path:'Of_Operator',
    component:OfOperatorComponent
  },
  {
    path:'From_Operator',
    component:FromOperatorComponent
  },
  {
    path:'fromEvent',
    component:FromEventComponent
  },
  {
    path:'Pub-Sub-Library',
    component:PubSubLibraryComponent
  },
  {
    path:'individual-functionality',
    component:IndividualFunctionalityComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfOperatorComponent } from './of-operator/of-operator.component';
import { FromOperatorComponent } from './from-operator/from-operator.component';
import { FromEventComponent } from './from-event/from-event.component';
import { PubSubLibraryComponent } from './pub-sub-library/pub-sub-library.component';
import { IndividualFunctionalityComponent } from './individual-functionality/individual-functionality.component';

@NgModule({
  declarations: [
    AppComponent,
    OfOperatorComponent,
    FromOperatorComponent,
    FromEventComponent,
    PubSubLibraryComponent,
    IndividualFunctionalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

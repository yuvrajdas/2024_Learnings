import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFromComponent } from './reactive-from/reactive-from.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  {
    path:'reactive-from',
    component:ReactiveFromComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

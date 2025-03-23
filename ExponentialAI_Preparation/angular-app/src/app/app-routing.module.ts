import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren:()=>import('../app/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  },
  {
    path:'user',
    component:UserComponent,
    // canActivate:[authGuard],
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

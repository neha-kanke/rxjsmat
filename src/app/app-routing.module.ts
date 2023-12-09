import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/component/home/home.component';
import { AboutComponent } from './shared/component/about/about.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"about",component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

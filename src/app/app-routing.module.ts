import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
;

const routes: Routes = [
  // { path:'sign-in', component:SigninComponent}
  // { path:'sign-in', component:SigninComponent}
  { path:'', redirectTo:'sign-in', pathMatch:'full'},
  { path:'sign-in', component:SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

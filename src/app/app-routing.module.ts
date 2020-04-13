import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:"",component: SignupComponent},
  { path:"login",component: LoginComponent},
  { path:"home",pathMatch: 'full', canActivate: [AuthGuard],component: HomeComponent},
  { path:"editprofile",component: EditprofileComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }

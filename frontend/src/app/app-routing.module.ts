import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [{
  path: '', component: HomeComponent
},
{
  path: 'test', component: TestComponent
},
{
  path: 'register', component: RegisterComponent
},
{
  path: 'login', component: LoginComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

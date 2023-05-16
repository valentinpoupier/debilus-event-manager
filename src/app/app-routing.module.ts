import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './module/login/login.component';
import { HomeComponent } from './module/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'events', loadChildren: () => import('./module/event/event.module').then(m => m.EventModule) },
  { path: 'users', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

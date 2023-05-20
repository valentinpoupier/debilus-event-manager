import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAllComponent } from './user-all/user-all.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AuthGuard } from 'src/app/shared/guard/auth.guard';
import { UserResolver } from 'src/app/shared/service/user.service';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: '', component: UserAllComponent, canActivate: [AuthGuard] },
    { path: 'add', component: UserAddComponent},
    { path: ':id', component: UserDetailsComponent, canActivate: [AuthGuard], resolve: {user: UserResolver, character: UserResolver}},
    { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard], resolve: {user: UserResolver, character: UserResolver}},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

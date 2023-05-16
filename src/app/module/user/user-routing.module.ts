import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UserAllComponent } from './user-all/user-all.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: '', component: UserAllComponent },
    { path: 'add', component: UserAddComponent},
    { path: 'details', component: UserDetailsComponent},
  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserAllComponent } from './user-all/user-all.component';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';
import { UserAddComponent } from './user-add/user-add.component';


@NgModule({
  declarations: [
    UserComponent,
    UserAllComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }

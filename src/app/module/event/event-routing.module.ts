import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventAllComponent } from './event-all/event-all.component';
import { EventResolver } from 'src/app/shared/service/event.service';
import { EventDetailsComponent } from './event-details/event-details.component';
import { RoleGuard } from 'src/app/shared/guard/role.guard';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: 'create', component: EventCreateComponent, canActivate: [RoleGuard] },
  { path: 'all', component: EventAllComponent },
  { path: ':id', component: EventDetailsComponent, resolve: { event: EventResolver } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }

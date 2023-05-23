import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent } from './event.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventAllComponent } from './event-all/event-all.component';

const routes: Routes = [
  { path: '', component: EventComponent },
  { path: 'create', component: EventCreateComponent },
  { path: 'all', component: EventAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }

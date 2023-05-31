import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { EventCreateComponent } from './event-create/event-create.component';
import { SharedModule } from 'src/app/shared/module/shared/shared.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDatetimePickerInputEvent, NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EventAllComponent } from './event-all/event-all.component';
import { EventDetailsComponent } from './event-details/event-details.component';



@NgModule({
  declarations: [
    EventComponent,
    EventCreateComponent,
    EventAllComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgxMatDatetimePickerModule,
  ]
})
export class EventModule { }

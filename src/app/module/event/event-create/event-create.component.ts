import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventForm } from 'src/app/shared/model/event';
import { AuthService } from 'src/app/shared/service/auth.service';
import { EventService } from 'src/app/shared/service/event.service';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent {

  constructor(private $eventService : EventService, private $autService: AuthService, private $router: Router) { }


  eventForm : FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required, Validators.maxLength(1000)]),
    beginDate: new FormControl(null, [Validators.required]),
    endDate: new FormControl(null, [Validators.required]),
  });


  isLoading: boolean = false



  form!: EventForm


  onSubmit() {
    this.isLoading = true
    if(this.eventForm.valid) {
      this.form = this.eventForm.value
      console.log(this.form)
      if(this.form.beginDate > this.form.endDate){
        this.isLoading = false
        alert("The end date must be after the begin date")
        return
      }
      if(this.$autService.user != undefined){
        this.form.organizer = this.$autService.user.username
        this.$eventService.postEvent(this.eventForm.value).subscribe(
          () => {
            this.eventForm.reset()
          }
        )
        this.isLoading = false
        this.$router.navigate(['/events/all'])
      }
    }
  }

  cancel(){
    if(confirm("Are you sure you want to cancel?")){
      this.$router.navigate(['/events'])
    }
  }

}

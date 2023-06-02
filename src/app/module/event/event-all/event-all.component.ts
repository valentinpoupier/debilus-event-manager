import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventFC } from 'src/app/shared/model/event';
import { AuthService } from 'src/app/shared/service/auth.service';
import { EventService } from 'src/app/shared/service/event.service';

@Component({
  selector: 'app-event-all',
  templateUrl: './event-all.component.html',
  styleUrls: ['./event-all.component.scss']
})
export class EventAllComponent implements OnInit {

  isLoading: boolean = false;

  events: EventFC[] = []

  officer: boolean = this.$authService.user?.role.includes('ROLE_OFFICER') ? true : false;

  eventDone: boolean = false;



  displayedColumns: string[] = ['name', 'beginDate', 'endDate', 'organizer', 'status', 'action'];

  constructor(private $eventService : EventService, private $router : Router, private $authService: AuthService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.$eventService.getEvents().subscribe(
      (events) => {
        this.events = events
        this.isLoading = false
        console.log(this.events)
        this.events.forEach(
          (event) => {
            if(Date.parse(event.endDate) < Date.now()){
              this.eventDone = true
              event.status = 'Done'
            }
            if(Date.parse(event.beginDate) < Date.now() && Date.parse(event.endDate) > Date.now()){
              event.status = 'In progress'
            }
            if(Date.parse(event.beginDate) > Date.now()){
              event.status = 'Not started'
            }
            console.log(event.status)
          }
        )
      }
    )

  }

  getEventById(id: number | undefined) {
    if(id !== undefined){
      this.$eventService.getEventById(id).subscribe(
        (event) => {
          console.log(event)
        }
      )
      this.$router.navigate(['/events', id])
    }else{
      console.log('id undefined')
    }
  }

}

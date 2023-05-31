import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventFC } from 'src/app/shared/model/event';
import { EventService } from 'src/app/shared/service/event.service';

@Component({
  selector: 'app-event-all',
  templateUrl: './event-all.component.html',
  styleUrls: ['./event-all.component.scss']
})
export class EventAllComponent implements OnInit {

  isLoading: boolean = false;

  events: EventFC[] = []

  displayedColumns: string[] = ['name', 'beginDate', 'endDate', 'organizer', 'action'];

  constructor(private $eventService : EventService, private $router : Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.$eventService.getEvents().subscribe(
      (events) => {
        this.events = events
        this.isLoading = false
        console.log(this.events)
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

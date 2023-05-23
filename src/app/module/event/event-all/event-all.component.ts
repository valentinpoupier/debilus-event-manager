import { Component, OnInit } from '@angular/core';
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

  constructor(private $eventService : EventService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.$eventService.getEvents().subscribe(
      (events) => {
        this.events = events
        this.isLoading = false
      }
    )
  }

}

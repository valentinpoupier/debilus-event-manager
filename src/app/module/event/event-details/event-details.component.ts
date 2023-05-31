import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventFC } from 'src/app/shared/model/event';
import { AuthService } from 'src/app/shared/service/auth.service';
import { EventService } from 'src/app/shared/service/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {

  event!: EventFC;
  isParticipant: boolean = false;
  auth!: any;

  constructor(private $eventService: EventService, private $activatedRoute: ActivatedRoute, private $authService: AuthService, private $router : Router) {}

  ngOnInit(): void {
    this.$activatedRoute.data.subscribe((data) => {
      this.event = data['event'];
      console.log(this.event);
      this.checkIfUserIsParticipant();
    });

    if (this.$authService.user) {
      this.auth = this.$authService.user;
    }
  }

  checkIfUserIsParticipant(): void {
    this.event.participants.forEach((participant) => {
      if (participant.username === this.$authService.user?.username) {
        this.isParticipant = true;
      }
    });
  }

  addParticipant() {
    this.$eventService.addParticipant(this.event.id).subscribe(() => {
      this.$eventService.getEventById(this.event.id).subscribe((updatedEvent) => {
        this.event = updatedEvent;
        this.isParticipant = true;
        console.log(this.event);
      });
    });
  }


  removeParticipant() {
    this.$eventService.removeParticipant(this.event.id).subscribe(
      () => {
        this.$eventService.getEventById(this.event.id).subscribe((updatedEvent) => {
          this.event = updatedEvent;
          this.isParticipant = false;
          console.log(this.event);
        });
      });
  }

  deleteEvent() {
    if (this.event.organizer.username != this.auth.username) {
      return
    }
    if (this.$authService.user){
      this.$eventService.deleteEvent(this.event.id, this.$authService.user.username).subscribe(
        () => {
          console.log('event deleted')
          this.$router.navigate(['/events'])
        }
      )
    }
  }


}

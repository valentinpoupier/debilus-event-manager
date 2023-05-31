import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { EventFC, EventForm } from '../model/event';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiBaseUrl = 'http://localhost:8080/';

  constructor(private $httpClient : HttpClient, private $authService : AuthService) { }

  postEvent(event: EventForm): Observable<EventForm> {
    return this.$httpClient.post<EventForm>(this.apiBaseUrl + 'event/create', event);
  }

  getEvents(): Observable<EventFC[]> {
    return this.$httpClient.get<EventFC[]>(this.apiBaseUrl + 'event/all');
  }

  getEventById(id: number): Observable<EventFC> {
    return this.$httpClient.get<EventFC>(this.apiBaseUrl + 'event/' + id);
  }

  deleteEvent(id: number, username: string): Observable<EventFC> {
    return this.$httpClient.delete<EventFC>(this.apiBaseUrl + 'event/' + id+'/delete/'+username);
  }

  addParticipant(id: number): Observable<EventFC> {
    return this.$httpClient.patch<EventFC>(this.apiBaseUrl + 'event/' + id+'/addParticipant', this.$authService.user?.username);
  }

  removeParticipant(id: number): Observable<EventFC> {
    return this.$httpClient.patch<EventFC>(this.apiBaseUrl + 'event/' + id+'/removeParticipant', this.$authService.user?.username);
  }

}

export const EventResolver: ResolveFn<EventFC>=
  (route : ActivatedRouteSnapshot) =>{
    return inject(EventService).getEventById(route.params['id'])}


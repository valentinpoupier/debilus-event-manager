import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventFC, EventForm } from '../model/event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiBaseUrl = 'http://localhost:8080/';

  constructor(private $httpClient : HttpClient) { }

  postEvent(event: EventForm): Observable<EventForm> {
    return this.$httpClient.post<EventForm>(this.apiBaseUrl + 'event/create', event);
  }

  getEvents(): Observable<EventFC[]> {
    return this.$httpClient.get<EventFC[]>(this.apiBaseUrl + 'event/all');
  }

  getEventById(id: number): Observable<EventFC> {
    return this.$httpClient.get<EventFC>(this.apiBaseUrl + 'event/' + id);
  }

  deleteEvent(id: number): Observable<EventFC> {
    return this.$httpClient.delete<EventFC>(this.apiBaseUrl + 'event/' + id+'/delete');
  }

}

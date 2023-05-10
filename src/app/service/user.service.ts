import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { UserForm } from '../model/userform';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = 'http://localhost:8080/';

  constructor(private $httpClient : HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.$httpClient.get<User[]>(`${this.apiBaseUrl}user/all`);
  }

  getUser(id: number): Observable<User> {
    return this.$httpClient.get<User>(this.apiBaseUrl + 'user/' + id);
  }

  createUser(user: UserForm): Observable<User> {
    return this.$httpClient.post<User>(this.apiBaseUrl + 'user/register', user);
  }
}

export const UserResolver: ResolveFn<User>=
  (route : ActivatedRouteSnapshot) =>{
  return inject(UserService).getUser(route.params['id'])}


import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { UserForm } from '../model/userform';
import { CharacterGame } from '../model/character';
import { FC } from '../model/freecompany';
import { SearchChar } from '../model/jsonsearchchar';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = 'http://localhost:8080/';

  private xivApiBaseUrl = 'https://xivapi.com/';

  constructor(private $httpClient : HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.$httpClient.get<User[]>(`${this.apiBaseUrl}user/all`);
  }

  getUser(id: number): Observable<User> {
    return this.$httpClient.get<User>(this.apiBaseUrl + 'user/' + id);
  }

  getCharacter(id: number): Observable<CharacterGame> {
    return this.$httpClient.get<CharacterGame>(this.xivApiBaseUrl + 'character/' + id);
  }

  searchCharacterByName(name: string): Observable<SearchChar> {
    return this.$httpClient.get<SearchChar>(this.xivApiBaseUrl + 'character/search?name=' + name+'&server=Zodiark');
  }

  getFreeCompany(): Observable<FC> {
    return this.$httpClient.get<FC>(this.xivApiBaseUrl + 'freecompany/9229283011365724630?data=FCM');
  }

  createUser(user: UserForm): Observable<User> {
    return this.$httpClient.post<User>(this.apiBaseUrl + 'user/register', user);
  }
}

export const UserResolver: ResolveFn<User>=
  (route : ActivatedRouteSnapshot) =>{
  return inject(UserService).getUser(route.params['id'])}


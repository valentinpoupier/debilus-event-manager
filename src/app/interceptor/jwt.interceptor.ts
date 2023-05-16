import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../shared/service/auth.service";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private readonly _authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user = this._authService.user;
    if( user ){
      let headers = new HttpHeaders()
        .set("Authorization", `Bearer ${user.token}`);
      const authRequest = request.clone({headers: headers })
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}

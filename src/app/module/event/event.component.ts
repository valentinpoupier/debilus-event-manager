import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  auth: string[] = this.$authService.user?.role || [];

  officer: boolean = this.auth.includes('ROLE_OFFICER');


  constructor(private $authService: AuthService) { }

}

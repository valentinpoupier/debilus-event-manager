import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private $authService: AuthService) { }

  logout() {
    this.$authService.logout()
  }

  loginOrLogout(): boolean {
    if (this.$authService.user) {
      return true
    } else {
      return false
    }
  }
}

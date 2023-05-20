import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterGame } from 'src/app/shared/model/character';
import { User } from 'src/app/shared/model/user';
import { AuthService } from 'src/app/shared/service/auth.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private $authService: AuthService, private $userService : UserService, private $router: Router) { }

  logout() {
    this.$authService.logout()
  }

  user= this.$authService.user


  loginOrLogout(): boolean {
    if (this.$authService.user) {
      this.user = this.$authService.user
      return true
    } else {
      return false
    }
  }

  getUserByUsername(username: string | undefined) {
    if(username !== undefined){
      this.$userService.getUserByUsername(username).subscribe(
        (user) => {
          this.$router.navigate(['/users/profile', user.username])
        }
      )
    }else{
      this.$router.navigate(['/users'])
    }
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-all',
  templateUrl: './user-all.component.html',
  styleUrls: ['./user-all.component.scss']
})
export class UserAllComponent implements OnInit, OnDestroy {

  isLoading: boolean = true;

  users: User[] = []
  constructor(private $userService: UserService, private $router : Router) { }

  ngOnInit(): void {
    this.$userService.getUsers().subscribe(
      (users) => {this.users = users;
      this.isLoading = false
      console.log(this.users)
      })

  }

  getUserById(id: number | undefined) {
    if(id !== undefined){
      this.$userService.getUserById(id).subscribe(
        (user) => {
          this.$router.navigate(['/users', user.username])
        }
      )
    }else{
      this.$router.navigate(['/users'])
    }
  }


  displayedColumns: string[] = ['username', 'race', 'rank', 'gender', 'action'];

  ngOnDestroy(): void {
    console.log('destroyed')
  }

}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterGame } from 'src/app/shared/model/character';
import { User } from 'src/app/shared/model/user';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user!: User

  character!: CharacterGame

  isLoading: boolean = false;


  constructor(private _userService: UserService, private $activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.isLoading = true
    this.$activatedRoute.data.subscribe(
      (data) => {
        this.user = data['user']
        console.log(this.user)
      }
    )
    this._userService.getCharacter(this.user.characterId).subscribe(
      (character) => {
        this.character = character
        console.log(this.character)
      }
    )
    this.isLoading = false
  }

}

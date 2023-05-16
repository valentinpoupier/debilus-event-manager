import { Component, OnInit } from '@angular/core';
import { CharacterGame } from 'src/app/shared/model/character';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  character!: CharacterGame

  constructor(private _userService: UserService) { }


  ngOnInit(): void {
    this._userService.getCharacter(24756454).subscribe(
      (character) => {
        this.character = character
        console.log(this.character)
      }
    )
  }

}

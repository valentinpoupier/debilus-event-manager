import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserForm } from 'src/app/shared/model/userform';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnDestroy {

  isLoading: boolean = false

  interval: any

  user!: UserForm

  jobs: string[] = ['Warrior','Paladin', 'Dark Knight', 'Gunbreaker', 'White Mage', 'Scholar', 'Astrologian', 'sage', 'Monk', 'Dragoon', 'Ninja', 'Samurai', 'reaper','Bard', 'Machinist', 'Dancer', 'Black Mage', 'Summoner', 'Red Mage', 'Blue Mage']

  ranks: string[] = ['Overlord', 'ArchSuccubus', 'Demon General', 'Griefing Legend', 'Demon/Succubus', 'Fiend', 'InHell', 'Corrupted', 'Alter Ego']

  races: string[] = ['Hyur', 'Elezen', 'Lalafell', 'Miqo\'te', 'Roegadyn', 'Au Ra', 'Hrothgar', 'Viera']

  formGroupUser: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    jobs: new FormControl(null),
    rank: new FormControl(null, [Validators.required]),
    race: new FormControl(null, [Validators.required]),
  })
  constructor(private $userService: UserService, private $router: Router) { }

  ngOnDestroy(): void {
    this.formGroupUser.reset()
    this.isLoading = false
  }

  submit() {
    if (this.formGroupUser.valid) {
      this.isLoading = true
      this.user = this.formGroupUser.value
      console.log(this.user)
      this.$userService.createUser(this.user).subscribe(
        (user) => {
          console.log(user)
        }
      )
      this.interval= setTimeout(() => {
      this.$router.navigateByUrl('/users')
      }, 1000);
    }
  }

}

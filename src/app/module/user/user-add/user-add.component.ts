import { Component, OnDestroy, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CharacterGame } from 'src/app/shared/model/character';
import { FC, FreeCompanyMember } from 'src/app/shared/model/freecompany';
import { UserForm } from 'src/app/shared/model/userform';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnDestroy, OnInit {

  isLoading: boolean = false

  interval: any

  user!: UserForm

  jobs: string[] = ['Warrior','Paladin', 'Dark Knight', 'Gunbreaker', 'White Mage', 'Scholar', 'Astrologian', 'sage', 'Monk', 'Dragoon', 'Ninja', 'Samurai', 'reaper','Bard', 'Machinist', 'Dancer', 'Black Mage', 'Summoner', 'Red Mage', 'Blue Mage']

  character!: CharacterGame

  freecompany!: FC

  fcMember: boolean = false

  newMember: boolean = false

  member!: FreeCompanyMember | any

  formMember: FormGroup = new FormGroup({
    memberId: new FormControl(undefined),
  })



  formId: FormGroup = new FormGroup({
    characterId: new FormControl(null, [Validators.required])
  })

  formGroupUser: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    confirmPassword: new FormControl(null, [Validators.required]),
    jobs: new FormControl(null),
  })

  constructor(private $userService: UserService, private $router: Router) { }
  ngOnInit(): void {
    this.isLoading = true
    this.$userService.getFreeCompany().subscribe(
      (freecompany) => {
        this.freecompany = freecompany
        console.log(this.freecompany)
        this.isLoading = false
      }
    )
  }

  getCharacterById() {
    this.isLoading = true
    console.log(this.formId.value.characterId)
    this.$userService.getCharacter(this.formId.value.characterId).subscribe(
      (character) => {
        this.character = character
        console.log(this.character)
      }
    )
    this.isLoading = false
  }

  getMemberById() {
    this.isLoading = true;

    let usernameExists = false;

    this.freecompany.FreeCompanyMembers.forEach((member) => {
      if (member.ID == this.formMember.value.memberId) {
        this.member = member;
        console.log(this.member);
      }
    });

    this.$userService.getUsers().subscribe((users) => {
      users.forEach((user) => {
        if (user.characterId == this.member.ID.toString()) {
          usernameExists = true;
          this.isLoading = false
          alert("Character already registered");
          return;
        }
      });

      if (usernameExists) {
        this.isLoading = false
        return;
      }
      this.$userService.getCharacter(this.member.ID.toString()).subscribe((character) => {
        this.character = character;
        console.log(this.character);
      });

      this.isLoading = false;
    });
  }


  ngOnDestroy(): void {
    this.formGroupUser.reset()
    this.isLoading = false
  }

  newMemberButton() {
    this.newMember = true
    this.fcMember = false
  }

  fcMemberButton() {
    this.newMember = false
    this.fcMember = true
  }

  submit() {
    console.log(this.formGroupUser.value)
    if (this.formGroupUser.value.password != this.formGroupUser.value.confirmPassword) {
      alert("Password not match")
      return
    }

    let usernameExists = false; // Variable de contrôle

    this.$userService.getUsers().subscribe(
      (users) => {
        users.forEach(
          (user) => {
            if (user.username == this.formGroupUser.value.username) {
              alert("Username already exists")
              usernameExists = true; // Définir la variable de contrôle à true
              return;
            }
          }
        );

        if (usernameExists) {
          return; // Arrêter l'exécution de la fonction si le nom d'utilisateur existe déjà
        }

        // Le reste du code ici sera exécuté si le nom d'utilisateur n'existe pas
        if (this.formGroupUser.valid) {
          this.isLoading = true
          this.user = this.formGroupUser.value
          this.user.characterId = String(this.character.Character.ID)
          this.user.characterName = this.character.Character.Name
          this.character.Character.Gender == 1 ? this.user.gender=true : this.user.gender = false
          this.user.race = this.character.Character.Race.Name
          if(this.fcMember){
            this.user.rank = this.member.Rank
          }else{
            this.user.rank = "Corrupted"
          }
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
    );
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup;



  constructor(builder: FormBuilder, private readonly _authService: AuthService) {
    this.form = builder.group({
      username: [],
      password: []
    })
  }

  ngOnInit(): void {
  }

  connect(){
    this._authService.login( this.form.value ).subscribe();
    this.form.reset();
  }

}

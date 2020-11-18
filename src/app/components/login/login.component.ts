import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[ Validators.required, Validators.minLength(1)])
  });

  isLoading: boolean = false;
  logingError!: string;

  constructor(private session : SessionService, private router: Router, private auth : AuthService) {
    if(this.session.get() !== false){
      //Redirect to any side
      this.router.navigateByUrl('/dashboard')
    }
   }

  ngOnInit(): void {
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async onLoginClicked(){
    this.logingError='';
    try{
      this.isLoading=true;

      const result: any = await this.auth.login(this.loginForm.value);
      if(result.status < 400 ){
        this.session.save({token: result.data.token, username: result.data.user.username});
        this.router.navigateByUrl('/dashboard');
      }

    } catch(e){
      this.logingError = e.error.error;
    } finally {
      this.isLoading = false;
    }
  }
}

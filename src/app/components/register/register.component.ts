import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 registerForm: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required, Validators.minLength(3)]),
    password: new FormControl('',[ Validators.required, Validators.minLength(1)])
  });

  isLoading: boolean = false;
  registerError!: string;

  constructor(private auth: AuthService, private session: SessionService, private router:Router) { 
    if(this.session.get() !==false){
      //Redirect to any side
      this.router.navigateByUrl('/dashboard')
    }
  }

  ngOnInit(): void {
  }

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }

  async onRegisterClicked(){
    this.registerError = '';

    try{
      this.isLoading= true;

      const result: any = await this.auth.register(this.registerForm.value);
      
      if(result.status < 400){
          this.session.save({
            token: result.data.token,
            username: result.data.user.username
          });
          this.router.navigateByUrl('/dashboard');
        }

    }catch(e){
      console.error(e);
      this.registerError = e.error.error;
    }finally{
      this.isLoading= false;
    }
  }
}

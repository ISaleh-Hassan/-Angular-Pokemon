import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';
import { AuthService } from '../../services/auth/auth.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    username: '',
    password: ''
  }

  isLoading: boolean = false;
  registerError!: string;

  constructor(private auth: AuthService, private session: SessionService, private router:Router) { 
    if(this.session.get() !==''){
      //Redirect to any side
      this.router.navigateByUrl('/dashboard')
    }
  }

  ngOnInit(): void {
  }
  async onRegisterClicked(){
    this.registerError = '';

    try{
      this.isLoading= true;

      const result: any = await this.auth.register(this.user);
      
      if(result.status < 400){
          this.session.save(result.data.token);
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

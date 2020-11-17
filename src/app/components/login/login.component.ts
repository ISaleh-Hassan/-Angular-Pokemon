import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user ={
    username: '',
    password: ''
  }
  constructor(private session : SessionService, private router: Router) {
    if(this.session.get() !==''){
      //Redirect to any side
      this.router.navigateByUrl('/dashboard')
    }
   }

  ngOnInit(): void {
  }

  onLoginClicked(){
    console.log(this.user)
  }
}

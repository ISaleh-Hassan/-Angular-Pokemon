import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  loggedInUser$!: Observable<string>;
  loggedInStatus$!: Observable<boolean>;

  constructor(private session: SessionService){
  }
  ngOnInit(): void {
    this.loggedInUser$ = this.session.isLoggedInUser;
    this.loggedInStatus$ = this.session.isLoggedIn;
  }

}

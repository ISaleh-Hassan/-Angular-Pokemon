import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  name!: string;
  pokemonList: any[]=[];

  
  constructor(private session: SessionService) { 
    this.name= this.session.get().username;
  }

  ngOnInit(): void {
    this.addPokemons();
  }

  addPokemons(){
    if(sessionStorage){
      console.log(this.session.get())
      console.log("We got some pokemons here!");
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-trainer-page',
  templateUrl: './trainer-page.component.html',
  styleUrls: ['./trainer-page.component.css']
})
export class TrainerPageComponent implements OnInit {
  name!: string;
  pokemonList: any[]=[];

  
  constructor(private session: SessionService,private dataService: DataService, private router: Router) { 
    this.name= this.session.get().username;
  }

  ngOnInit(): void {
    this.addPokemons();
  }

  addPokemons(){
    this.pokemonList = this.session.getPokemonList();
  }

  handleCardClick(pokemon:any){
    this.dataService.selectedPokemon = pokemon;
    this.router.navigate(["/pokemon",pokemon.id])    
  }
}

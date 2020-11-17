import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonUrl:any;
  pokemon: any;
  constructor(private pokeService: PokemonService) {};

  

  ngOnInit(): void {
    this.getPokemon();    
  }

  async getPokemon(){
    const result: any = await this.pokeService.getPokemon(this.pokemonUrl.url);
    this.pokemon = result;
    
    
  }
}

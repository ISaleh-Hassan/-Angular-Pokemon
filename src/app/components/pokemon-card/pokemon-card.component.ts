import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonUrl:any;
  @Output() onClickCard: EventEmitter<any> = new EventEmitter();
  pokemon: any;
  constructor(private pokeService: PokemonService) {};

  

  ngOnInit(): void {
    this.getPokemon();
  }

  async getPokemon(){
    const result: any = await this.pokeService.getPokemonByUrl(this.pokemonUrl.url);
    this.pokemon = result;
  }
  onPokemonCardClick(){
    this.onClickCard.emit(this.pokemon);
    
  }
}

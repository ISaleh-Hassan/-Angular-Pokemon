import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.css']
})
export class PokemonPageComponent implements OnInit {

  pokemonList: [];
  constructor(private pokeService: PokemonService) { };

  ngOnInit(): void {
    this.loadPokemon();
  }

  async loadPokemon() {
    try {
      const result: any = await this.pokeService.getMultiplePokemon();
      this.pokemonList = result.results;
    } catch (e) {
      console.log(e);

    }
  }
}

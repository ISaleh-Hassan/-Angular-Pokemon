import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { PokemonService } from 'src/app/services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-detail-page',
  templateUrl: './pokemon-detail-page.component.html',
  styleUrls: ['./pokemon-detail-page.component.css']
})
export class PokemonDetailPageComponent implements OnInit {

  constructor(public dataService: DataService, private pokemonService: PokemonService, private route: ActivatedRoute) { }
  pokemon: any;
  ngOnInit(): void {
    if (this.dataService.selectedPokemon) {
      this.pokemon = this.dataService.selectedPokemon;
      
    } 
    else {
      const pokemonId = this.route.snapshot.paramMap.get('pokemonId');
      this.getPokemonById(pokemonId);

      
    }

  }
  async getPokemonById(pokemonId: any) {
    try {
      const result: any = await this.pokemonService.getPokemonById(pokemonId);
      this.pokemon = result;

    } catch (e) {
      console.log(e);

    }
  }
}

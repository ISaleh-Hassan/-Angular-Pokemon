import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-card-list',
  templateUrl: './pokemon-card-list.component.html',
  styleUrls: ['./pokemon-card-list.component.css']
})
export class PokemonCardListComponent implements OnInit {
  page = 1;
  pageSize = 3;
  @Input() pokemonList: any[] = [];
  @Output() handleCardClick: EventEmitter<any> = new EventEmitter();

 

  constructor() { }

  onCardClick(pokemon:any){
    this.handleCardClick.emit(pokemon);

  }

  ngOnInit(): void {
    console.log(this.pokemonList);
    
  }

}

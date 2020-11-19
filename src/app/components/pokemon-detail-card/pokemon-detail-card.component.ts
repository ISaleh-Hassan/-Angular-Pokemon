import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-detail-card',
  templateUrl: './pokemon-detail-card.component.html',
  styleUrls: ['./pokemon-detail-card.component.css']
})
export class PokemonDetailCardComponent implements OnInit {
  @Input() pokemon:any;
  activeTab = 2;
  page = 1;
  pageSize = 9;
  moves: any[] = [];
  constructor() { }


   
  ngOnInit(): void {
    this.moves = this.pokemon.moves;    
    this.moves.forEach(move =>{
      move.move.name = move.move.name.replace("-"," ");
    })
  }

  onCollectClick(){
    // Store in session
    console.log(`You collected ${this.pokemon.name}`);
    
  }


}

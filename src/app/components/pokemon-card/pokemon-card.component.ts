import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon:any;
  @Output() onClickCard: EventEmitter<any> = new EventEmitter();
  
  constructor() {};


  ngOnInit(): void {
  }

  onPokemonCardClick(){
    this.onClickCard.emit(this.pokemon);
    
  }
}

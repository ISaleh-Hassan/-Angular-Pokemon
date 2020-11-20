
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCardListComponent } from 'src/app/components/pokemon-card-list/pokemon-card-list.component';

import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';



@NgModule({
    declarations:[  PokemonCardComponent, PokemonCardListComponent],
    imports:[NgbModule,CommonModule],
    exports:[PokemonCardComponent,PokemonCardListComponent]
})
export class pokemonCardSharedModule{}



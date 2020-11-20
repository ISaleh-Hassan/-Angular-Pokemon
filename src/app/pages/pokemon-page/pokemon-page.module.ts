import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonCardListComponent } from 'src/app/components/pokemon-card-list/pokemon-card-list.component';

import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './pokemon-page.component';

const routes : Routes = [{
    path: '',
    component: PokemonPageComponent
}];

@NgModule({
    declarations:[ PokemonPageComponent, PokemonCardComponent, PokemonCardListComponent],
    imports:[RouterModule.forChild(routes), CommonModule, NgbModule],
    exports:[RouterModule]
})
export class PokemonPageModule{}



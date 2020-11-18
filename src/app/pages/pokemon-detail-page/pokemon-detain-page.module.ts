import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from "@angular/router";
import { PokemonDetailCardComponent } from 'src/app/components/pokemon-detail-card/pokemon-detail-card.component';
import { PokemonDetailPageComponent } from './pokemon-detail-page.component';

const routes : Routes = [{
    path: '',
    component: PokemonDetailPageComponent
}];

@NgModule({
    declarations:[ PokemonDetailPageComponent, PokemonDetailCardComponent],
    imports:[RouterModule.forChild(routes), CommonModule, NgbModule],
    exports:[RouterModule]
})
export class PokemonDetailPageModule{}


import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PokemonCardComponent } from 'src/app/components/pokemon-card/pokemon-card.component';
import { PokemonPageComponent } from './pokemon-page.component';

const routes : Routes = [{
    path: '',
    component: PokemonPageComponent
}];

@NgModule({
    declarations:[ PokemonPageComponent, PokemonCardComponent],
    imports:[RouterModule.forChild(routes), CommonModule],
    exports:[RouterModule]
})
export class PokemonPageModule{}



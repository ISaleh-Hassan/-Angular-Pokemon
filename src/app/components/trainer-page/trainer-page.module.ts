import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { pokemonCardSharedModule } from 'src/app/SharedModule/pokemonCardShared.module';

import { TrainerPageComponent } from './trainer-page.component';


const routes : Routes = [{
    path: '',
    component: TrainerPageComponent
}];

@NgModule({
    declarations:[ TrainerPageComponent],
    imports:[RouterModule.forChild(routes), CommonModule, NgbModule,pokemonCardSharedModule],
    exports:[RouterModule]
})
export class TrainerPageModule{}

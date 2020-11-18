import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyListComponent } from './survey-list.component';
import { SurveyListItemComponent} from '../survey-list-item/survey-list-item.component'

const routes: Routes = [
    {
        path:'',
        component: SurveyListComponent
    }
]

@NgModule({
    declarations: [SurveyListItemComponent],
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
})
export class SurveyListModule {}
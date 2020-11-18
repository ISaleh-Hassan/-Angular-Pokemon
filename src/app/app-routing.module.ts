import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    loadChildren: ()=> import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'surveys',
    loadChildren: () => import('./components/survey/survey-list/survey-list.module').then(m=> m.SurveyListModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: 'surveys/:surveyId',
    loadChildren: () => import('./components/survey/survey-detail/survey-detail.module').then(m=> m.SurveyDetailModule),
    canActivate: [ AuthGuard ]
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

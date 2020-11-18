import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
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
    path: '',
    pathMatch: 'full',
    redirectTo: '/pokemon'
  },
  {
    path: 'pokemon',
    loadChildren: () => import('./pages/pokemon-page/pokemon-page.module').then(m => m.PokemonPageModule),
  },
  {
    path: 'pokemon/:pokemonId',
    loadChildren: () => import('./pages/pokemon-detail-page/pokemon-detain-page.module').then(m => m.PokemonDetailPageModule),
    canActivate: [ AuthGuard ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

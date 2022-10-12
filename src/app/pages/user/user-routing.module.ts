import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { InterestComponent } from './interest/interest.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: 'favoritos',
    component: FavoriteComponent
  },
  {
    path: 'listaInteresses',
    component: InterestComponent
  },
  {
    path: 'perfil',
    component: ProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

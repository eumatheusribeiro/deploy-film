import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DiscoverComponent } from './discover/discover.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { SearchComponent } from './search/search.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'discover'
  },
  {
    path: 'discover',
    component: DiscoverComponent
  },
  {
    path: 'detalhes/:filmeId',
    component: DetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'emCartaz',
    component: NowPlayingComponent
  },
  {
    path: 'proximos',
    component: UpcomingComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

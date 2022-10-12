import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailModule } from './detail/detail.module';
import { DiscoverModule } from './discover/discover.module';
import { HomeRoutingModule } from './home-routing.module';
import { NotFoundModule } from './not-found/not-found.module';
import { NowPlayingModule } from './now-playing/now-playing.module';
import { SearchModule } from './search/search.module';
import { UpcomingModule } from './upcoming/upcoming.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DiscoverModule,
    DetailModule,
    SearchModule,
    NowPlayingModule,
    UpcomingModule,
    NotFoundModule
  ]
})
export class HomeModule { }

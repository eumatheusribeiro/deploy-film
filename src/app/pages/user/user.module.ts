import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from '../../core/header/header.module';
import { FavoriteModule } from './favorite/favorite.module';
import { InterestModule } from './interest/interest.module';
import { ProfileModule } from './profile/profile.module';
import { UserRoutingModule } from './user-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserRoutingModule,
    FavoriteModule,
    InterestModule,
    ProfileModule,
    HeaderModule
  ]
})
export class UserModule { }

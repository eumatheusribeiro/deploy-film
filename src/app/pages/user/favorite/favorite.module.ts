import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { PaginatorModule } from '../../../shared/components/paginator/paginator.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { FavoriteComponent } from './favorite.component';



@NgModule({
  declarations: [
    FavoriteComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MatTabsModule,
    IconsModule,
    ListModule,
    PaginatorModule,
    MenuModule,
    MatProgressSpinnerModule,
    TranslateModule,
    CapitalizeModule
  ],
  exports: [
    FavoriteComponent
  ]
})
export class FavoriteModule { }

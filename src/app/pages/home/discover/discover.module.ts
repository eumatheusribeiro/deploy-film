import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { PaginatorModule } from '../../../shared/components/paginator/paginator.module';
import { DiscoverComponent } from './discover.component';



@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    ListModule,
    PaginatorModule,
    MatProgressSpinnerModule,
    TranslateModule,
    CapitalizeModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }

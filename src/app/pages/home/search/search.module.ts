import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    ListModule,
    MatProgressSpinnerModule,
    TranslateModule,
    IconsModule,
    CapitalizeModule,
    PaginatorModule
  ],
  exports: [
    SearchComponent
  ]
})
export class SearchModule { }

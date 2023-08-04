import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { UpcomingComponent } from './upcoming.component';



@NgModule({
  declarations: [
    UpcomingComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    MatProgressSpinnerModule,
    ListModule,
    TranslateModule,
    CapitalizeModule,
    PaginatorModule
  ],
  exports: [
    UpcomingComponent
  ]
})
export class UpcomingModule { }

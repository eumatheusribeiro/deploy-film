import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { PaginatorModule } from '../../../shared/components/paginator/paginator.module';
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
    PaginatorModule,
    ListModule,
    TranslateModule,
    CapitalizeModule
  ],
  exports: [
    UpcomingComponent
  ]
})
export class UpcomingModule { }

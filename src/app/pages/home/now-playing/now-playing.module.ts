import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { NowPlayingComponent } from './now-playing.component';



@NgModule({
  declarations: [
    NowPlayingComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    ListModule,
    MatProgressSpinnerModule,
    TranslateModule,
    CapitalizeModule,
    PaginatorModule
  ],
  exports: [
    NowPlayingComponent
  ]
})
export class NowPlayingModule { }

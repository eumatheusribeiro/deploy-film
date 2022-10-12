import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { CapitalizeModule } from 'src/app/core/pipes/capitalize/capitalize.module';
import { HeaderModule } from '../../../core/header/header.module';
import { JoinModule } from '../../../core/pipes/join/join.module';
import { NumberFormatterModule } from '../../../core/pipes/number-formatter/number-formatter.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { PaginatorModule } from '../../../shared/components/paginator/paginator.module';
import { VideoModule } from '../../../shared/components/video/video.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { DetailComponent } from './detail.component';



@NgModule({
  declarations: [
    DetailComponent,
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    PaginatorModule,
    MatProgressSpinnerModule,
    JoinModule,
    NumberFormatterModule,
    IconsModule,
    MatTooltipModule,
    VideoModule,
    TranslateModule,
    CapitalizeModule
  ]
})
export class DetailModule { }

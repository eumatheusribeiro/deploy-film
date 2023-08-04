import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { LanguageNameModule } from 'src/app/core/pipes/language-name/language-name.module';
import { IconsModule } from 'src/app/shared/icons/icons.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { DiscoverComponent } from './discover.component';



@NgModule({
  declarations: [
    DiscoverComponent
  ],
  imports: [
    CommonModule,
    ListModule,
    MatProgressSpinnerModule,
    TranslateModule,
    CapitalizeModule,
    PaginatorModule,
    IconsModule,
    LanguageNameModule
  ],
  exports: [
    DiscoverComponent
  ]
})
export class DiscoverModule { }

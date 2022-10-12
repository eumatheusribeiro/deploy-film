import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { ListModule } from '../../../shared/components/list/list.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { InterestComponent } from './interest.component';



@NgModule({
  declarations: [
    InterestComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    ListModule,
    MatProgressSpinnerModule,
    TranslateModule,
    IconsModule,
    CapitalizeModule
  ],
  exports: [
    InterestComponent
  ]
})
export class InterestModule { }

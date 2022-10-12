import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { NotFoundComponent } from './not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    MenuModule,
    TranslateModule,
    IconsModule,
    RouterModule,
    CapitalizeModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class NotFoundModule { }

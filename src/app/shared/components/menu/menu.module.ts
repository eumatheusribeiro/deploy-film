import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { IconsModule } from '../../icons/icons.module';
import { FormMessageModule } from '../form-message/form-message.module';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    RouterModule,
    MatSlideToggleModule,
    TranslateModule,
    FormMessageModule,
    MatMenuModule,
    CapitalizeModule
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { IconsModule } from '../../icons/icons.module';
import { ListComponent } from './list.component';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    MatTooltipModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }

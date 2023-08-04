import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../shared/icons/icons.module';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    FormsModule
  ],
  exports: [
   HeaderComponent
  ]
})
export class HeaderModule { }

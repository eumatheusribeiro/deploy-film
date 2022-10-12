import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../../icons/icons.module';
import { PaginatorComponent } from './paginator.component';



@NgModule({
  declarations: [
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    IconsModule
  ],
  exports: [
    PaginatorComponent
  ]
})
export class PaginatorModule { }

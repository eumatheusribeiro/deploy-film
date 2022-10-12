import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';



@NgModule({
  declarations: [
    CapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CapitalizePipe
  ]
})
export class CapitalizeModule { }

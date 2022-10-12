import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumberFormatterPipe } from './number-formatter.pipe';



@NgModule({
  declarations: [
    NumberFormatterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumberFormatterPipe
  ]
})
export class NumberFormatterModule { }

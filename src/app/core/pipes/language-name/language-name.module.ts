import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LanguageNamePipe } from './language-name.pipe';



@NgModule({
  declarations: [
    LanguageNamePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [LanguageNamePipe]
})
export class LanguageNameModule { }

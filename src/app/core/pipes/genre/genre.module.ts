import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GenrePipe } from './genre.pipe';



@NgModule({
  declarations: [
    GenrePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [GenrePipe]
})
export class GenreModule { }

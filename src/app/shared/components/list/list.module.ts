import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { GenreModule } from 'src/app/core/pipes/genre/genre.module';
import { IconsModule } from '../../icons/icons.module';
import { ListSkeletonComponent } from './list-skeleton/list-skeleton.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [
    ListComponent,
    ListSkeletonComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    MatTooltipModule,
    RouterModule,
    TranslateModule,
    GenreModule
  ],
  exports: [
    ListComponent,
    ListSkeletonComponent
  ]
})
export class ListModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../../../core/header/header.module';
import { CapitalizeModule } from '../../../core/pipes/capitalize/capitalize.module';
import { FormMessageModule } from '../../../shared/components/form-message/form-message.module';
import { MenuModule } from '../../../shared/components/menu/menu.module';
import { IconsModule } from '../../../shared/icons/icons.module';
import { ProfileComponent } from './profile.component';



@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    HeaderModule,
    MenuModule,
    MatProgressSpinnerModule,
    IconsModule,
    ReactiveFormsModule,
    FormMessageModule,
    CapitalizeModule,
    MatSlideToggleModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }

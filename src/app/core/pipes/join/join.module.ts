import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { JoinPropertiesObjectPipe } from './join-properties-object.pipe';
import { JoinPipe } from './join.pipe';



@NgModule({
  declarations: [
    JoinPropertiesObjectPipe,
    JoinPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    JoinPipe,
    JoinPropertiesObjectPipe
  ]
})
export class JoinModule { }

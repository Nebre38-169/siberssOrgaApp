import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquetteSingleComponent } from './boquette-single/boquette-single.component';



@NgModule({
  declarations: [
    BoquetteSingleComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    BoquetteSingleComponent
  ]
})
export class BoquetteModule { }

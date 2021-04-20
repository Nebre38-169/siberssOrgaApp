import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotanceSingleComponent } from './rotance-single/rotance-single.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    RotanceSingleComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    RotanceSingleComponent
  ]
})
export class RotanceModule { }

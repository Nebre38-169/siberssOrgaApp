import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotanceSingleComponent } from './rotance-single/rotance-single.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [
    RotanceSingleComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule.forRoot()
  ],
  exports: [
    RotanceSingleComponent
  ]
})
export class RotanceModule { }

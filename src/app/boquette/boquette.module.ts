import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquetteSingleComponent } from './boquette-single/boquette-single.component';
import { IonicModule } from '@ionic/angular';
import { RotanceModule } from '../rotance/rotance.module';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [
    BoquetteSingleComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule.forRoot(),
    RotanceModule
  ],
  exports : [
    BoquetteSingleComponent
  ]
})
export class BoquetteModule { }

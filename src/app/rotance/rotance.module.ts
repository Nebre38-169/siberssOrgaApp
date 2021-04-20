import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotanceSingleComponent } from './rotance-single/rotance-single.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { RotanceSinglePageComponent } from './rotance-single-page/rotance-single-page.component';
import { RotanceRoutingModule } from './rotance-routing.module';



@NgModule({
  declarations: [
    RotanceSingleComponent,
    RotanceSinglePageComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule.forRoot(),
    RotanceRoutingModule
  ],
  exports: [
    RotanceSingleComponent
  ]
})
export class RotanceModule { }

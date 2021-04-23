import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotanceSingleComponent } from './rotance-single/rotance-single.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { RotanceSinglePageComponent } from './rotance-single-page/rotance-single-page.component';
import { RotanceRoutingModule } from './rotance-routing.module';
import { RotanceCreateComponent } from './rotance-create/rotance-create.component';
import { RotanceEditComponent } from './rotance-edit/rotance-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RotanceSingleComponent,
    RotanceSinglePageComponent,
    RotanceCreateComponent,
    RotanceEditComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule.forRoot(),
    ReactiveFormsModule,
    RotanceRoutingModule
  ],
  exports: [
    RotanceSingleComponent,
    RotanceCreateComponent,
    RotanceEditComponent
  ]
})
export class RotanceModule { }

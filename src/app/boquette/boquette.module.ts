import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquetteSingleComponent } from './boquette-single/boquette-single.component';
import { IonicModule } from '@ionic/angular';
import { RotanceModule } from '../rotance/rotance.module';
import { PipeModule } from '../pipe/pipe.module';
import { BoquetteRoutingModule } from './boquette-routing.module';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';
import { PostsModule } from '../posts/posts.module';



@NgModule({
  declarations: [
    BoquetteSingleComponent,
    BoquetteSinglePageComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule.forRoot(),
    BoquetteRoutingModule,
    RotanceModule,
    PostsModule
  ],
  exports : [
    BoquetteSingleComponent
  ]
})
export class BoquetteModule { }

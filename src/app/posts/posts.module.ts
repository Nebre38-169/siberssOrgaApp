import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './posts-single/posts-single.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [
    PostsSingleComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule
  ],
  exports: [
    PostsSingleComponent
  ]
})
export class PostsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsSingleComponent } from './posts-single/posts-single.component';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { PostsCreateComponent } from './posts-create/posts-create.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PostsSingleComponent,
    PostsCreateComponent,
    PostsEditComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule.forRoot(),
    ReactiveFormsModule
  ],
  exports: [
    PostsSingleComponent,
    PostsCreateComponent,
    PostsEditComponent
  ]
})
export class PostsModule { }

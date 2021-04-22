import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PipeModule } from '../pipe/pipe.module';
import { PostsModule } from '../posts/posts.module';
import { ChannelSingleComponent } from './channel-single/channel-single.component';
import { Channel } from '../class/channel/channel';
import { ChannelSinglePageComponent } from './channel-single-page/channel-single-page.component';
import { ChannelRoutingModule } from './channel-routing.module';



@NgModule({
  declarations: [
    ChannelSingleComponent,
    ChannelSinglePageComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
    PipeModule,
    PostsModule,
    ChannelRoutingModule
  ],
  exports:[
    ChannelSingleComponent
  ]
})
export class ChannelModule { }

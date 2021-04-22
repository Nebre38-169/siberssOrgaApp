import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home-single-page/home.page';
import { BoquetteModule } from '../boquette/boquette.module';
import { PipeModule } from '../pipe/pipe.module';
import { ChannelModule } from '../channel/channel.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BoquetteModule,
    ChannelModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage
  ]
})
export class HomePageModule {}

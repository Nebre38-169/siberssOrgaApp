import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './services/other/auth.service';
import { BoquetteService } from './services/boquette/boquette.service';
import { RotanceService } from './services/boquette/rotance.service';
import { ChannelService } from './services/channel/channel.service';
import { PostsService } from './services/channel/posts.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    BoquetteService,
    RotanceService,
    ChannelService,
    PostsService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}

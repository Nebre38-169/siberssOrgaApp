import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChannelSinglePageComponent } from './channel-single-page/channel-single-page.component';

const routes: Routes = [
  {
    path :':id',
    component: ChannelSinglePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChannelRoutingModule {}

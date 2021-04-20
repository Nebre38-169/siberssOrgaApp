import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RotanceSinglePageComponent } from './rotance-single-page/rotance-single-page.component';

const routes: Routes = [
  {
    path: ':id',
    component: RotanceSinglePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotanceRoutingModule {}

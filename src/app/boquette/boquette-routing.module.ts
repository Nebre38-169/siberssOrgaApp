import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';

const routes: Routes = [
  {
    path :':id',
    component: BoquetteSinglePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoquetteRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path : 'boquette',
    loadChildren: () => import('./boquette/boquette.module').then( m => m.BoquetteModule)
  },
  {
    path : 'rotance',
    loadChildren: () => import('./rotance/rotance.module').then( m => m.RotanceModule)
  },
  {
    path : 'channel',
    loadChildren: () => import('./channel/channel.module').then( m => m.ChannelModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

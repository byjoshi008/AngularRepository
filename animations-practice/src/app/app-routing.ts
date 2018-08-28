import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { Animation1Component } from './animation1/animation1.component';
import { Animation2Component } from './animation2/animation2.component';
import { Animation3Component } from './animation3/animation3.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomePageComponent,
    data: { transition: 'slide-right' }
  },
  {
    path: 'animation1',
    component: Animation1Component,
    data: { transition: 'slide-top' }
  },
  {
    path: 'animation2',
    component: Animation2Component,
    data: { transition: 'slide-bottom' }
  },
  {
    path: 'animation3',
    component: Animation3Component,
    data: { transition: 'slide-left' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

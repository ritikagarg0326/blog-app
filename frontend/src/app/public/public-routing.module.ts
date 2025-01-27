import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
 
  
  {
    path: '', component: LandingComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default to /home when app loads
  // You can add other routes here
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }

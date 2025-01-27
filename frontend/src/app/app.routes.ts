import { Routes } from '@angular/router';
import { LandingComponent } from './public/landing/landing.component';

export const routes: Routes =[


  
  {
    path: '', component: LandingComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default to /home when app loads
  // You can add other routes here

];

//[
   // {
    //    path: '', component: LandingComponent,
    //  },
//];

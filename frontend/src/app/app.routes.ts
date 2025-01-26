import { Routes } from '@angular/router';
import { LandingComponent } from './public/landing/landing.component';
import { PublicComponent } from './public/public.component';

export const routes: Routes =[

 {
    path: '', component: PublicComponent,
    children : [
  
  {
    path: '', component: LandingComponent,
  },
],
},
];

//[
   // {
    //    path: '', component: LandingComponent,
    //  },
//];

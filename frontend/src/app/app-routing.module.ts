import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicModule } from '../app/public/public.module';
// Import your components here
// import { HomeComponent } from './home/home.component';  // Example component

const routes: Routes = [
 { path: '', loadChildren: ()=> import('../app/public/public.module').then((r) => r.PublicModule)},  // Define some example routes
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

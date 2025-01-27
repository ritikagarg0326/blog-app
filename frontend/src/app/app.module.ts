import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Import routing module
import { LandingComponent } from './public/landing/landing.component';
import { LandingModule } from './public/landing/landing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    // Other components, like HomeComponent and AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

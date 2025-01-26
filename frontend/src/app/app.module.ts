import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // Import routing module
import { LandingComponent } from './public/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    // Other components, like HomeComponent and AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Add AppRoutingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

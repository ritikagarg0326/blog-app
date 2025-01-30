import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../shared/header/header.module';
import { LandingComponent } from './landing.component';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    
  ]
})
export class LandingModule { }

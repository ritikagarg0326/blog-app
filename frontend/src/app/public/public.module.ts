import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LandingModule } from './landing/landing.module';
import { HeaderModule } from './shared/header/header.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PublicRoutingModule, LandingModule, HeaderModule
  ]
})
export class PublicModule { }

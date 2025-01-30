import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { PublicModule } from './public/public.module';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    PublicModule,
    BrowserModule
  ]
})
export class AppModule { }

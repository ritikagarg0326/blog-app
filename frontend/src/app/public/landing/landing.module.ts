import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderModule } from '../shared/header/header.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule, 
    HeaderModule,
     MatToolbarModule,
     MatIconModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  
})
export class LandingModule { }

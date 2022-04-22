import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { FooterModule } from 'src/app/shared/modules/footer/footer.module';


@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FooterModule
  ],
  exports: [HomePageComponent]
})
export class HomepageModule { }

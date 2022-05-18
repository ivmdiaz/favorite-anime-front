import { NgModule } from '@angular/core';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CommonsModule } from 'src/app/shared/modules/commons/commons.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonsModule,
    HomepageRoutingModule
  ],
  exports: [HomePageComponent]
})
export class HomepageModule { }

import { NgModule } from '@angular/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CommonsModule } from 'src/app/shared/modules/commons/commons.module';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonsModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }

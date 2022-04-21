import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { MaterialModule } from '../core/material/material.module';

const COMPONENTS = [
  MainHeaderComponent
]

@NgModule({
  declarations: [
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule
  ],
  exports: COMPONENTS
})
export class SharedModule { }

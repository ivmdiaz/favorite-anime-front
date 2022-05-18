import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class CommonsModule { }

import { FooterModule } from './../footer/footer.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule,
  FooterModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES
})
export class CommonsModule { }

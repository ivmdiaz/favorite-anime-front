import { TranslateModule } from '@ngx-translate/core';
import { FooterModule } from './../footer/footer.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

const MODULES = [
  CommonModule,
  TranslateModule,
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

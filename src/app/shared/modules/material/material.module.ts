import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';

const MODULES = [
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatDividerModule,
  MatTabsModule
]

@NgModule({
  declarations: [],
  imports: MODULES,
  exports: MODULES,
})
export class MaterialModule { }

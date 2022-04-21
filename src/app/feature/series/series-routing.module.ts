import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesHomeComponent } from './componets/series-home/series-home.component';

const routes: Routes = [
  { path: '', component: SeriesHomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }

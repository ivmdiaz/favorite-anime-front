import { CardComponent } from './../../../../shared/interfaces/card-component.interface';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMES, MatCardAnimeModel } from '../../interfaces/home-page-card.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements CardComponent {

  datasource: MatCardAnimeModel[] = ANIMES;

  constructor(public router: Router) { }

  navigate(routerLink: string) {
    this.router.navigate([routerLink])
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardComponent } from 'src/app/shared/interfaces/card-component.interface';
import { MatCardAnimeModel, ANIMES } from '../../interfaces/home-page-card.interface';

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

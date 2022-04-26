import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ANIMES, MatCardAnime } from '../../interfaces/home-page-card.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  get datasource(): MatCardAnime[] {
    return ANIMES;
  }

  navigate(routerLink: string) {
    this.router.navigate([routerLink])
  }
}

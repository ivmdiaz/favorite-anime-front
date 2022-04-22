import { MatCard } from './../../../../shared/interfaces/mat-card.interface';
import { Component, OnInit } from '@angular/core';
import { ANIMES } from '../../interfaces/home-page-card.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  get datasource(): MatCard[] {
    return ANIMES;
  }
}

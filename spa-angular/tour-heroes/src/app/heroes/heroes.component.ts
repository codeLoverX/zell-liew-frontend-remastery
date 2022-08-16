import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero.interface';
import { HEROES } from '../data/mock-heroes';

@Component({
  selector: 'app-heroes', 
  /*
  component's css selector to be imported as:
  <app-heroes> </app-heroes>
   */
  templateUrl: './heroes.component.html',
  // location of components html
  styleUrls: ['./heroes.component.css']
  // location of multiple css files
})
export class HeroesComponent implements OnInit {
  randomHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes = HEROES;
  constructor() { }
  ngOnInit(): void {
  }

}
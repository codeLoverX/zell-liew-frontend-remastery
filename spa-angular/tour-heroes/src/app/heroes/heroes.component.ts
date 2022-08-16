import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero.interface';
import { HEROES } from '../data/mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  /* Anything JS-y we write here */
  /* So far, this is javascript we write in <script></script> tag */

  // variables
  randomHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  // Original hardcoded
  // heroes: Hero[] = HEROES;
  // Now we initialize it, later we get it
  heroes: Hero[] = [];
  selectedHero?: Hero;

  /* functions */

  // onSelect function
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  // dependency injection for angular
  // Instead of creating that service with the new
  // keyword, use the dependency injection that Angular 
  // supports to inject it into the HeroesComponent constructor.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // lifecycle hook for angular
  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
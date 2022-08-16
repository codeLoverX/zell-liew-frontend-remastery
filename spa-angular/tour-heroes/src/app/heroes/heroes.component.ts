import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero.interface';
import { HEROES } from '../data/mock-heroes';
import { HeroService } from '../services/hero.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-heroes',
  /*
  2.component's css selector to be imported as:
  <app-heroes> </app-heroes>
   */
  templateUrl: './heroes.component.html',
  // 2. location of components html
  styleUrls: ['./heroes.component.css']
  // 2. location of multiple css files (if need so array)
})
export class HeroesComponent implements OnInit {

  /* 3. Anything JS-y we write here */
  /* So far, this is javascript we write in <script></script> tag */

  // 4. variables
  //  {{}} allows us to insert these JS Variables inside the HTML-->

  // ORIGINALLY THE VARIABLE WAS hardcoded LIKE THIS
  //  HEROES: Hero[] = [
  // { id: 12, name: 'Dr. Nice' },
  // { id: 20, name: 'Tornado' }
  // ];

  randomHero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero?: Hero;

  /* functions */

  //  8. click handler. The click handler onselect 
  // <button (click)="onselect" >
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`Selected hero is ${hero.id}`)
  }

  // 11. dependency injection for angular
  // Instead of creating that service with the new
  // keyword, use the dependency injection that Angular 
  // supports to inject it into the HeroesComponent constructor.
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  // 12. lifecycle hook for angular
  // for fetch or rxjs requests, first we load the html, css, static javascript
  // then we fetch the data
  // and change the remaining html, css, javascript based on the detch
  // Now we initialize it, later we get it
  heroes: Hero[] = [];

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes =>
        // assign the returned hero result to our heroes array 
        this.heroes = heroes);
  }

}
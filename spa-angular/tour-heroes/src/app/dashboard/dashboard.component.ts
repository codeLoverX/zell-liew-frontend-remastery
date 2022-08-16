import { Component, OnInit } from '@angular/core';
import { Hero } from '../data/hero.interface';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getFiveHeroes();
  }

  getFiveHeroes(): void {
    this.heroService.getHeroes()
      // assign the returned heroes result to our heroes array
      .subscribe(heroes => this.heroes = heroes.slice(0, 5));
  }
}
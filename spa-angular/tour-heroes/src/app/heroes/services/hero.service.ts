import { Injectable } from '@angular/core';

import { Observable, of, filter, mergeMap } from 'rxjs';
import { Hero } from '../data/hero.interface';
import { HEROES } from '../data/mock-heroes';
import { HeroesModule } from '../heroes.module';
import { MessageService } from './message.service';

// import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    
    // const hero = HEROES.find(h => h.id === id)!;
    // return of(hero);

    // or can write it like this:
    const hero = of(HEROES).pipe(
      mergeMap(_ => _),
      filter(hero => hero.id=== id) 
    );
    return hero;
  }
}
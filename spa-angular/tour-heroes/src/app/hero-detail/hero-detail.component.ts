import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../data/hero.interface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../services/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    // No property binding input so not nested component
    // <app-hero-detail> </app-hero-detail>
    // get from route
    if (this.hero === undefined) {
      this.getHero();
    }

  }

  // 9. property binding input so nested component
  // <app-hero-detail [hero]="selectedHero">
  // </app-hero-detail>
  @Input() hero?: Hero;

  ngOnInit(): void {
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
    .subscribe(hero => 
      // assign the returned hero result to our hero 
      this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

}

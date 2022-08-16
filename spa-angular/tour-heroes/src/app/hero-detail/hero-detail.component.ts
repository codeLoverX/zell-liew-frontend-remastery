import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../data/hero.interface';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }
  
  // property binding input
  @Input() hero?: Hero;

  ngOnInit(): void {
  }

}

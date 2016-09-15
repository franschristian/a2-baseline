import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from './hero.service';

import { Hero } from './hero';

import { OnInit } from '@angular/core';

// import '../../../public/css/styles.css';
// import '../../scss/heroes.css';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  providers: [
    HeroService
  ]
  // styleUrls: ['./app.component.css']
})

export class HeroesComponent implements OnInit {
  
  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private _router: Router,
    private _heroService: HeroService
  ) {

  }

  ngOnInit(): void {
    this.getHeroes();
    // this.getHeroesSlowly();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  getHeroesSlowly(): void {
    this._heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this._router.navigate(['/detail', this.selectedHero.id]);
  }

}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

// import '../../scss/dashboard.css';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(
        private _router: Router,
        private _heroService: HeroService
    ) { }

    ngOnInit(): void {
        this._heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero): void {
        let link = ['/detail', hero.id];
        this._router.navigate(link);
    }
}

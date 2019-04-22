import { Component, OnInit } from '@angular/core';
import { Heroe, HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  heroes: Heroe[];
  termino: string;
  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
     });
  }

  verHeroe( idx:string ){
    this.router.navigate(['heroe', idx]);
  }

}

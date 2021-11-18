import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList1: any[];
  pokemonList2: any[];
  pokemonList3: any[];

  constructor(public pokemonService: PokemonService) {
    pokemonService.getGen1Pokemon().subscribe((data: any) => {
      this.pokemonList1 = data.results;
    });

    pokemonService.getGen2and3Pokemon().subscribe((data: any) => {
      this.pokemonList2 = data.results;
    });

    pokemonService.getGen4Pokemon().subscribe((data: any) => {
      this.pokemonList3 = data.results;
    });
  }




  ngOnInit(): void {
  }


}

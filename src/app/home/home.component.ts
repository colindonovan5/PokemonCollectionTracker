import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pokemonList: any[];


  constructor(public pokemonService: PokemonService) {
    pokemonService.getAllPokemon().subscribe((data: any) => {
      this.pokemonList = data.results;
    });
  }




  ngOnInit(): void {
  }


}

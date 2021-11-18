import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'pokenode-ts';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input()
  pokemonName: string;

  pokemon: Pokemon;


  constructor(private pokemonService: PokemonService) {

  }

  async ngOnInit(): Promise<void> {
    await this.pokemonService.getPokemonByName(this.pokemonName).subscribe(data => {
      this.pokemon = data;
    });
  }
}

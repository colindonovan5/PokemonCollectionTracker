import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  api = 'https://pokeapi.co/api/v2';
  data$: Observable<any>;
  constructor(private http: HttpClient) {

  }

  public getPokemonByName(name: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(this.api + '/pokemon/' + name).pipe(shareReplay(1));
  }

  public getAllPokemon(): Observable<any[]> {
    return this.http.get<Pokemon[]>(this.api + '/pokemon?limit=493').pipe(shareReplay(1));
  }
}

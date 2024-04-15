import { Component } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from '../mock-pokemon-list';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent {
  pokemonList: Pokemon[] = POKEMONS;

}

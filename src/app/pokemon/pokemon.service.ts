import { Injectable } from "@angular/core";
import { Pokemon } from "./pokemon";
import { POKEMONS } from "./mock-pokemon-list";

@Injectable({
	providedIn: "root",
})
export class PokemonService {
	getPokemonList(): Pokemon[] {
		return POKEMONS;
	}

	getPokemonbyId(pokemonId: number): Pokemon | undefined {
		return POKEMONS.find((pokemon) => pokemon.id == pokemonId);
	}

	getPokemonTypeList(): string[] {
		return [
			"Plante",
			"Feu",
			"Eau",
			"Insecte",
			"Normal",
			"Electrik",
			"Poison",
			"Fée",
			"Vol",
			"Combat",
			"Psy",
		];
	}
}

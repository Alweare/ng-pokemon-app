import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";
import { materialize } from "rxjs";

@Component({
	selector: "app-root",
	templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
	pokemonList: Pokemon[] = POKEMONS;
	pokemonSelected: Pokemon|undefined;
	ngOnInit() {
		// méthode qui se lance a l'initialisation.
		console.table(this.pokemonList);
	}

	selectPokemon(pokemonId: String) {
		const id = +pokemonId;
		const pokemon: Pokemon | undefined = this.pokemonList.find(
			(pokemon) => pokemon.id == +pokemonId
		);
		if (pokemon) {
			console.log(`Vous avez demandé ${pokemon.name}`);
			this.pokemonSelected = pokemon;
		} else {
			console.log(`Vous avez demandé un pokemon qui n'existe pas`);
			this.pokemonSelected = pokemon;
		}
	}
}
//modifier le template pour afficher liste de pokemon
//charger la liste des 12 Pokemon
//afficher le nom d'un pokemon dans le console log

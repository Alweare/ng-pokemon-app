import { Component, OnInit } from "@angular/core";
import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";

@Component({
	selector: "app-root",
	template: `
		<h1>Liste de Pokémons !</h1>

		<router-outlet />
	`,
})
export class AppComponent implements OnInit {
	
pokemonList: Pokemon[] = POKEMONS;

	ngOnInit() { // méthode qui se lance a l'initialisation. 
		console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[1]);
	}

	selectPokemon(pokemon: Pokemon)
     {
		console.log(`Vous avez cliqué sur le pokemon ${pokemon.name}`);
	}

}
//modifier le template pour afficher liste de pokemon 
//charger la liste des 12 Pokemon
//afficher le nom d'un pokemon dans le console log 
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Pokemon } from "../pokemon";
import { Router } from "@angular/router";
import { PokemonService } from "../pokemon.service";
@Component({
	selector: "app-detail-pokemon",
	templateUrl: "./detail-pokemon.component.html",
	styles: ``,
})
export class DetailPokemonComponent implements OnInit {
	pokemonList: Pokemon[];
	pokemon: Pokemon | undefined;

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private pokemonService: PokemonService
	) {}

	ngOnInit() {
		const pokemonId: string | null = this.route.snapshot.paramMap.get("id");

		if (pokemonId) {
			this.pokemon = this.pokemonService.getPokemonbyId(+pokemonId);
		} else {
			this.pokemon = undefined;
		}
	}
	goToPokemonList() {
		this.router.navigate(["/pokemons"]);
	}
}

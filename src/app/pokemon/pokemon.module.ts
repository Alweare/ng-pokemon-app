import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon-type-color.pipe";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { RouterModule, Routes } from "@angular/router";
import { PokemonService } from "./pokemon.service";
const pokemonRoutes: Routes = [
	{ path: "pokemons", component: ListPokemonComponent }, //les routes sont lu du haut vers le bas faire les plus spécifique en haut et général en bas
	{ path: "pokemon/:id", component: DetailPokemonComponent },
];
@NgModule({
	declarations: [
		ListPokemonComponent,
		BorderCardDirective,
		PokemonTypeColorPipe,
		DetailPokemonComponent,
	],
	imports: [CommonModule, RouterModule.forChild(pokemonRoutes)],
	providers: [PokemonService],
})
export class PokemonModule {}

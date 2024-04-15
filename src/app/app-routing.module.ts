import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListPokemonComponent } from "./list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";

const routes: Routes = [
	{ path: "pokemons", component: ListPokemonComponent }, //les routes sont lu du haut vers le bas faire les plus spécifique en haut et général en bas
	{ path: "pokemon/:id", component: DetailPokemonComponent },
	{ path: "", redirectTo: "pokemons", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}

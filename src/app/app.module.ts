import { NgModule } from "@angular/core";
import {
	BrowserModule,
	provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BorderCardDirective } from "./pokemon/border-card.directive";
import { PokemonTypeColorPipe } from "./pokemon/pokemon-type-color.pipe";
import { ListPokemonComponent } from "./pokemon/list-pokemon/list-pokemon.component";
import { DetailPokemonComponent } from "./pokemon/detail-pokemon/detail-pokemon.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

@NgModule({
	declarations: [
		AppComponent,
		BorderCardDirective,
		PokemonTypeColorPipe,
		ListPokemonComponent,
		DetailPokemonComponent,
		PageNotFoundComponent,
	],
	imports: [BrowserModule, AppRoutingModule],
	providers: [provideClientHydration()],
	bootstrap: [AppComponent],
})
export class AppModule {}

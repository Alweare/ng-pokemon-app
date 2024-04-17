import { NgModule } from "@angular/core";
import {
	BrowserModule,
	provideClientHydration,
} from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PokemonModule } from "./pokemon/pokemon.module";

@NgModule({
	declarations: [AppComponent, PageNotFoundComponent],
	imports: [BrowserModule, PokemonModule, AppRoutingModule],
	providers: [provideClientHydration()],
	bootstrap: [AppComponent],
})
export class AppModule {}

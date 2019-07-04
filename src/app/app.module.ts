import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { TarjetasComponent } from './components/shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './components/shared/loading/loading.component';
import { ListasComponent } from './components/listas/listas.component';
import { ListaComponent } from './components/lista/lista.component';
//Importar rutas
import { ROUTES } from './app.routes';
//Pipes
import { NoimagePipe } from './pipes/noimage.pipe';

import { DomseguroPipe } from './pipes/domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    TarjetasComponent,
    LoadingComponent,
    ListasComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true} )
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

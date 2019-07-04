import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ListasComponent } from './components/listas/listas.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ListaComponent } from './components/lista/lista.component';

export const ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'listas', component: ListasComponent },
    { path: 'lista/:id', component: ListaComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artistas: any[] = [];
  //Propiedad booleana para controlar la visualización del icono de font-awesome
  loading: boolean;

  constructor( private spotify: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    this.loading = true;
    this.spotify.getArtistas( termino )
  .subscribe( (data: any) => {
    this.artistas = data;
    this.loading = false;
  });
    if (termino === '') {
    this.loading = false;
  }
  }

}

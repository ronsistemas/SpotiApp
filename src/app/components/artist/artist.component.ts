import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  // Propiedad objeto para almacenar los valores del artista obtenido de spotify
  artista: any = {};
  topTracks: any[] = [];
  loadingArtist: boolean;

  constructor( private router: ActivatedRoute,
               private spotify: SpotifyService) {
    this.router.params.subscribe( params => {
      this.loadingArtist = true;
      this.getArtista( params['id']);
      this.getTopTracks( params['id']);
    });
   }

  ngOnInit() {
  }

  getArtista( id: string) {
    this.spotify.getArtista( id ).subscribe( artista => {
      console.log(artista);
      this.artista = artista;
      this.loadingArtist = false;
    });
  }

  getTopTracks( id: string) {
    this.spotify.getTopTracks( id ).subscribe( topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }

}

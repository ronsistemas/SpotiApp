import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService ) {
    //Propiedad booleana para controlar la visualización del icono de font-awesome
    this.loading = true;
    this.error = false;

    this.spotify.getNewReleases()
        .subscribe( (resp: any) => {
            this.nuevasCanciones = resp;
            console.log(this.nuevasCanciones);
            this.loading = false;
        }, (errorServicio) => {
          this.loading = false;
          this.error = true;
          this.mensajeError = errorServicio.error.error.message;
        });
  }
  ngOnInit() {
  }

}

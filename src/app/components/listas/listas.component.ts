import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent implements OnInit {

  listas: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService) {
    this.loading = true;

    this.spotify.getLists()
    .subscribe( (resp: any) => {
      this.listas = resp;
      console.log(this.listas);
      this.loading = false;
    });

   }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../../servicios/noticias.service';

@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss']
})
export class PrivadoPageComponent implements OnInit {

  servicio:any;
  noticias:any[];
  constructor(noticias: NoticiasService) {
    noticias.getNews().subscribe( val => {
        this.servicio = val;
        this.noticias = this.servicio.articles;
    });

  }

  ngOnInit() {
  }

}
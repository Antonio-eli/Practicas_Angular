import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsaResponse } from '../interface/gifs.interface';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private     apikey: string  = 'f4MdoV7pknpWEZFEx364O4vunJIWsLUR';
  private _historial: string[] = [];
  public resultados : Gif[] = [];

  // TODO: Cambiar any por su tipado correspondiente
  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient) {
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    /*if ( localStorage.getItem('historial') ) {
      this._historial = JSON.parse( localStorage.getItem('historial')! );
    }*/
  }

  buscarGifs( query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(  this._historial ));
    }
    console.log(this._historial);
    this.http.get<SearchGifsaResponse>(`https://api.giphy.com/v1/gifs/search?api_key=f4MdoV7pknpWEZFEx364O4vunJIWsLUR&q=${ query }&limit=10`)
              .subscribe( (resp) => {
                console.log(resp.data);
                this.resultados = resp.data;
              });
  }
}

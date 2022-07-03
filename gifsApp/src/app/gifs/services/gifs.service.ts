import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private     apikey: string  = 'f4MdoV7pknpWEZFEx364O4vunJIWsLUR';
  private _historial: string[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient) {}

  buscarGifs( query: string = '') {
    query = query.trim().toLocaleLowerCase();
    if (!this._historial.includes( query )) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0, 10);
    }
    console.log(this._historial);
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=f4MdoV7pknpWEZFEx364O4vunJIWsLUR&q=one pice&limit=10')
              .subscribe( (resp: any) => {
                console.log(resp.data);
              });
  }
}

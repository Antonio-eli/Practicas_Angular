import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchGifsaResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private      apikey: string  = 'f4MdoV7pknpWEZFEx364O4vunJIWsLUR';
  private servicioUrl: string  = 'https://api.giphy.com/v1/gifs';
  private _historial : string[] = [];

  public resultados: Gif[] = [];

  // TODO: Cambiar any por su tipado correspondiente
  get historial() {
    return [...this._historial];
  }

  constructor( private http: HttpClient) {
    this._historial = JSON.parse( localStorage.getItem('historial')! ) || [];
    this.resultados = JSON.parse( localStorage.getItem('resultados')! ) || [];
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
    const params = new HttpParams()
                                  .set('api_key', this.apikey)
                                  .set('limit', '10')
                                  .set('q', query);
    console.log(params.toString());
    this.http.get<SearchGifsaResponse>(`${ this.servicioUrl }/search`, { params } )
              .subscribe( (resp) => {
                console.log(resp.data);
                this.resultados = resp.data;
                localStorage.setItem('resultados', JSON.stringify(  this.resultados ));
              });
  }
}

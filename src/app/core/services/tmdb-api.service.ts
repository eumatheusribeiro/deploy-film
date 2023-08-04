import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { VideoList } from '../../shared/components/video/interfaces/video';
import { ListIdEnum } from '../../shared/enums/list-id-enum';
import { Movie, MoviePageable } from '../../shared/interfaces/movie';
import { SavedList } from '../../shared/interfaces/saved-list';

const API_TMDB = environment.API_TMDB
const KEY = environment.KEY
const SESSION_ID = environment.SESSION_ID

@Injectable({
  providedIn: 'root'
})
export class TmdbApiService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  }

  constructor(
    private _http: HttpClient
  ) {}

  discoverMovies(idioma: string, pagina: number): Observable<MoviePageable> {
    return this._http
    .get<MoviePageable>(`${API_TMDB}discover/movie?api_key=${KEY}&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pagina}&language=${idioma}`)
  }

  getOnPoster(idioma: string, pagina = 1) {
    return this._http
    .get<MoviePageable>(`${API_TMDB}movie/now_playing?api_key=${KEY}&language=${idioma}&page=${pagina}`)
  }

  getComingSoon(idioma: string, pagina = 1) {
    return this._http
    .get<MoviePageable>(`${API_TMDB}movie/upcoming?api_key=${KEY}&language=${idioma}&page=${pagina}&region=br`)
  }

  searchByTitle(titulo:string, idioma: string,  pagina = 1): Observable<MoviePageable> {
    return this._http
    .get<MoviePageable>(`${API_TMDB}search/movie?api_key=${KEY}&language=${idioma}&query=${titulo}&page=1&include_adult=false
    `)
  }

  getMovieByID(filmeID: number, idioma: string): Observable<Movie> {
    return this._http
    .get<Movie>(`${API_TMDB}movie/${filmeID}?api_key=${KEY}&language=${idioma}`)

  }

  getVideoByID(filmeID: number, idioma: string): Observable<VideoList> {
    return this._http
    .get<VideoList>(`${API_TMDB}movie/${filmeID}/videos?api_key=${KEY}&language=${idioma}`)
  }

  getSaveList(nomeDaLista: ListIdEnum, idioma: string): Observable<SavedList> {
    return this._http
    .get<SavedList>(`${API_TMDB}list/${nomeDaLista}?api_key=${KEY}&language=${idioma}`)
  }

  saveItemByID(nomeDaLista: ListIdEnum, itemID: any) {
    return this._http
    .post<any>(`${API_TMDB}list/${nomeDaLista}/add_item?api_key=${KEY}&session_id=${SESSION_ID}`, itemID, this.httpOptions)
  }

  removeItemByID(nomeDaLista: ListIdEnum, itemID: any) {
    return this._http
    .post<any>(`${API_TMDB}list/${nomeDaLista}/remove_item?api_key=${KEY}&session_id=${SESSION_ID}`, itemID, this.httpOptions)
  }

  getGenreList(idioma: string): Observable<any> {
    return this._http
    .get<any>(`${API_TMDB}genre/movie/list?api_key=${KEY}&language=${idioma}`)
  }
}

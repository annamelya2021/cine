import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/trending/movie/day';
  private apiPopularUrl = 'https://api.themoviedb.org/3/movie/popular';
  private genresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '523f61468ef50f89408cd3c6eee9a9a0';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&language=es-ES`);
  }

  getNewMovies(): Observable<any> {
    return this.http.get(`${this.apiPopularUrl}?api_key=${this.apiKey}&language=es-ES&sort_by=release_date.desc`);
  }

  getGenres(): Observable<any> {
    return this.http.get(`${this.genresUrl}?api_key=${this.apiKey}&language=es-ES`);
  }

  getPopularMovies(page: number = 1): Observable<any> {
    return this.http.get(`${this.apiPopularUrl}?api_key=${this.apiKey}&language=es-ES&sort_by=vote_average.desc&page=${page}`);
  // const discoverUrl = 'https://api.themoviedb.org/3/discover/movie';
  // return this.http.get(`${discoverUrl}?api_key=${this.apiKey}&language=es-ES&sort_by=vote_average.desc&vote_count.gte=1000&page=${page}`);


  }

  searchMovies(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.searchUrl}?api_key=${this.apiKey}&query=${query}&language=es-ES&page=${page}`);
  }


}

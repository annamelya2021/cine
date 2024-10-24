import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3/trending/movie/day';
    private genresUrl = 'https://api.themoviedb.org/3/genre/movie/list';
  private apiKey = '523f61468ef50f89408cd3c6eee9a9a0';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&language=es-ES`);
  }

    getNewMovies(): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&language=es-ES&&sort_by=release_date.desc`);
    }

      getGenres(): Observable<any> {
    return this.http.get(`${this.genresUrl}?api_key=${this.apiKey}&language=es-ES`);
  }
//  getMovieTrailer(movieId: number): Observable<any> {
//     return this.http.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=es-ES`);
//   }

  getMovieTrailer(movieId: number): Observable<string | null> {
  return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${this.apiKey}&language=es-ES`)
    .pipe(
      map(response => {
        const trailer = response.results.find((video: any) => video.type === 'Trailer' && video.site === 'YouTube');
        return trailer ? `https://www.youtube.com/embed/${trailer.key}` : null;
      })
    );
}



}

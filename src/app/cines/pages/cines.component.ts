import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css']
})
export class CinesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  selectedMovie: Movie | null = null;
  genres: any[] = [];
  selectedGenreId: number | null = null;
  activeGenre: string | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
      this.filteredMovies = this.movies;
    });

    this.movieService.getGenres().subscribe(response => {
      this.genres = response.genres;
    });
  }

  getGenres(movieGenreIds: number[]): string[] {
    if (!this.genres || this.genres.length === 0) {
      return [];
    }

    return movieGenreIds.map(id => {
      const genre = this.genres.find(genre => genre.id === id);
      return genre ? genre.name : null;
    }).filter(name => name !== null);
  }

  openModal(movie: Movie) {
    this.selectedMovie = movie;

  }

  closeModal() {
    this.selectedMovie = null;
  }

   addToCarrito(movie: Movie) {
console.log('Carrito y mapa', movie);
  }

  filterMovies(genreId: number) {
    this.selectedGenreId = genreId;
    const selectedGenre = this.genres.find(genre => genre.id === genreId);
    this.activeGenre = selectedGenre ? selectedGenre.name : null;
    this.filteredMovies = this.movies.filter(movie => movie.genre_ids.includes(genreId));
  }

  resetFilter() {
    this.selectedGenreId = null;
    this.activeGenre = null;
    this.filteredMovies = this.movies;
  }
}

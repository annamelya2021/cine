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
  selectedMovie: Movie | null = null;
  genres: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
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

  // Завантажуємо трейлер для вибраного фільму
 this.movieService.getMovieTrailer(movie.id).subscribe((trailerUrl: string | null) => {
  if (this.selectedMovie && trailerUrl !== null) {
    this.selectedMovie.trailer_url = trailerUrl;
  }
});
}

  closeModal() {
    this.selectedMovie = null;
  }
}

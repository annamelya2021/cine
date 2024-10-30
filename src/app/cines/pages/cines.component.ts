import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css']
})
export class CinesComponent implements OnInit {
  movies: Movie[] = [];
  filteredMovies: Movie[] = [];
  genres: any[] = [];
  selectedGenreId: number | null = null;
  filterByRating: boolean = false;
  filterByNewest: boolean = false;
  selectedMovie: Movie | null = null;

  constructor(private movieService: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results.map((movie: any) => {
        return {
          ...movie,
          sessions: this.generateRandomSessions(),
          runtime: movie.runtime || 0,
          origin_country: movie.origin_country || '',
          director: movie.director || '',
        };
      });
      this.applyFilters();
    });

    this.movieService.getGenres().subscribe(response => {
      this.genres = response.genres;
    });
  }

generateRandomSessions(): { time: string; hall: string }[] {
  const halls = ['Sala Bilbao', 'Sala Barcelona'];
  const times = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];

  const numberOfSessions = Math.floor(Math.random() * 2) + 2;

  const shuffledTimes = times.sort(() => 0.5 - Math.random());


  const selectedTimes = shuffledTimes.slice(0, numberOfSessions);

  return selectedTimes.map(time => {
    const hall = halls[Math.floor(Math.random() * halls.length)];
    return { time, hall };
  });
}
  filterMovies(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const genreId = target.value;
    this.selectedGenreId = genreId ? parseInt(genreId, 10) : null;
    this.applyFilters();
  }

  getGenreName(genreId: number): string {
    const genre = this.genres.find(g => g.id === genreId);
    return genre ? genre.name : 'Невідомий жанр';
  }

  toggleRatingFilter(event: Event): void {
    this.filterByRating = (event.target as HTMLInputElement).checked;
    this.applyFilters();
  }

  toggleNewestFilter(event: Event): void {
    this.filterByNewest = (event.target as HTMLInputElement).checked;
    this.applyFilters();
  }

  resetFilter(): void {
    this.selectedGenreId = null;
    this.filterByRating = false;
    this.filterByNewest = false;

    const genreSelect = document.getElementById('genreSelect') as HTMLSelectElement;
    if (genreSelect) {
      genreSelect.selectedIndex = 0;
    }
    const ratingFilter = document.getElementById('ratingFilter') as HTMLInputElement;
    const newestFilter = document.getElementById('newestFilter') as HTMLInputElement;
    if (ratingFilter) {
      ratingFilter.checked = false;
    }
    if (newestFilter) {
      newestFilter.checked = false;
    }

    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredMovies = this.movies;

    if (this.selectedGenreId !== null) {
      this.filteredMovies = this.filteredMovies.filter(movie =>
        movie.genre_ids.includes(this.selectedGenreId ?? 0)
      );
    }

    if (this.filterByRating) {
      this.filteredMovies = this.filteredMovies.filter(movie => movie.vote_average >= 7);
    }

    if (this.filterByNewest) {
      this.filteredMovies = this.filteredMovies.sort((a, b) =>
        new Date(b.release_date).getTime() - new Date(a.release_date).getTime()
      );
    }
  }

  openModal(movie: Movie): void {
    this.selectedMovie = movie;
  }

  closeModal(): void {
    this.selectedMovie = null;
  }

  // addToCarrito(movie: Movie): void {
  //   console.log('Carrito', movie);
  // }



  selectSession(session: { time: string; hall: string }): void {
    console.log(`el usuario seleccionó la sesión: ${session.time} в ${session.hall}`);
  this.router.navigate(['/reserve'], { queryParams: { time: session.time, hall: session.hall } });
  }

}

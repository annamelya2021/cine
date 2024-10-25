import { Component, OnInit, HostListener } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../interfaces/movie';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {
  popularMovies: Movie[] = [];
  selectedMovie: Movie | null = null;
  searchQuery = '';
  private searchSubject = new Subject<string>();
  currentPage = 1;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadPopularMovies();

    // Налаштування обробки пошуку з debounce
    this.searchSubject.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe(query => {
      this.currentPage = 1;
      this.searchMovies(query);
    });
  }

  onSearchInput(): void {
    this.searchSubject.next(this.searchQuery);
  }

  loadPopularMovies(): void {
    this.movieService.getPopularMovies(this.currentPage).subscribe((data: any) => {
      this.popularMovies = this.currentPage === 1 ? data.results : [...this.popularMovies, ...data.results];
    });
  }

  searchMovies(query: string) {
    if (query) {
      this.movieService.searchMovies(query, this.currentPage).subscribe((data: any) => {
        this.popularMovies = this.currentPage === 1 ? data.results : [...this.popularMovies, ...data.results];
      });
    } else {
      this.loadPopularMovies();
    }
  }

  @HostListener("window:scroll", [])
  onScroll(): void {
    // Виклик додаткового завантаження при досягненні кінця сторінки
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      this.currentPage++;
      this.searchQuery ? this.searchMovies(this.searchQuery) : this.loadPopularMovies();
    }
  }

  openModal(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = null;
  }

  addToFavorites(movie: Movie) {
    console.log('Favoritos', movie);
  }
}

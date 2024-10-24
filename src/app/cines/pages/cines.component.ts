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

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  openModal(movie: Movie) {
    this.selectedMovie = movie;
  }

  closeModal() {
    this.selectedMovie = null;
  }
}

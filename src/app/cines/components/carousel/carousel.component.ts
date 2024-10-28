import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../services/movie.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  movies: any[] = [];
  currentIndex = 0;
  moviesPerPage = 3;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadMovies();
    this.startAutoSlide();
  }

  loadMovies() {
    this.movieService.getMovies().subscribe((data: any) => {
      this.movies = data.results
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);
    });
  }

  startAutoSlide() {
    setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  get transformStyle() {
    return `translateX(-${this.currentIndex * (100 / this.moviesPerPage)}%)`;
  }

  nextSlide() {
    if (this.currentIndex < Math.ceil(this.movies.length / this.moviesPerPage) - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = Math.ceil(this.movies.length / this.moviesPerPage) - 1;
    }
  }
}

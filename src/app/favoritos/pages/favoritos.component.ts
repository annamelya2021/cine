import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  favoriteMovies: Movie[] = [];

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    const favorites = localStorage.getItem('favorites');
    this.favoriteMovies = favorites ? JSON.parse(favorites) : [];
  }

  removeFromFavorites(movieId: number): void {
    this.favoriteMovies = this.favoriteMovies.filter(movie => movie.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(this.favoriteMovies));
  }
}

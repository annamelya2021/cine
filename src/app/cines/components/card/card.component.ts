import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../../interfaces/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() movie!: Movie;
  @Input() genres!: any[];
  @Output() addToCarrito = new EventEmitter<Movie>();
  @Output() openModal = new EventEmitter<Movie>();

  getGenres(movieGenreIds: number[]): string[] {
    if (!this.genres || this.genres.length === 0) {
      return [];
    }
    return movieGenreIds.map(id => {
      const genre = this.genres.find(genre => genre.id === id);
      return genre ? genre.name : null;
    }).filter(name => name !== null);
  }

  onAddToCarrito() {
    this.addToCarrito.emit(this.movie);
  }

  onOpenModal() {
    this.openModal.emit(this.movie);
  }
}

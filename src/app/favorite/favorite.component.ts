import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent {
  // set alias for component selector to maintain desired case sensitivity
  // alias can keep exclusivity for reference class name
  // keeps api stable
  @Input('isFavorite') isFavorite: boolean;
  @Output('change') change = new EventEmitter();

  onClick(isFavorite) {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  // set alias for component selector to maintain desired case sensitivity
  // alias can keep exclusivity for reference class name
  @Input('isFavorite') isFavorite: boolean;
  @Output() change = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(isFavorite) {
    this.isFavorite = !this.isFavorite;
    this.change.emit(this.isFavorite);
  }
}

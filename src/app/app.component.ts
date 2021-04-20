import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';
// applying interface for passing custom event object data from our event

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'title',
    isFavorite: false,
  };

  onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed', eventArgs);
  }
}

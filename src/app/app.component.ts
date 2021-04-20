import { Component } from '@angular/core';
// applying interface for passing custom event object data from our event

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // bind input properties
  tweet = {
    body: 'Here is the body of a tweet...',
    isLiked: false,
    likesCount: 0,
  };
  // bind output properties
  onLike() {
    console.log('Liked!');
  }
}

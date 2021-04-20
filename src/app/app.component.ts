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
    isLiked: true,
    likesCount: 10,
  };
  // bind output properties
  // pass event data(isLiked) to app component below
  onLikeChange(eventArgs) {
    console.log('changed!', eventArgs);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('isLiked') isActive: boolean;
  @Input('likesCount') likesCount: number;

  @Output('click') like = new EventEmitter();

  onClick() {
    this.isActive = !this.isActive;
    // announce new state of like component
    this.like.emit(this.isActive);
  }
}

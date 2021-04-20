import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
})
export class LikeComponent {
  @Input('isActive') isActive: boolean;
  @Input('likesCount') likesCount: number;

  @Output() like = new EventEmitter();

  onClick() {
    // if isActive is true, add or subtract 1 from likesCount
    this.likesCount += this.isActive ? -1 : 1;
    // toggle active
    this.isActive = !this.isActive;

    // announce new state of like component
    // consider passing object instead of just value!
    this.like.emit({ newValue: this.isActive });
  }
}

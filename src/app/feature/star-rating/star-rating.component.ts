import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number = 0; // Input to set the rating (default 0)
  @Input() isReadOnly: boolean = false; // Input to control interactivity
  @Output() rate = new EventEmitter<number>(); // Output event for rating changes

  stars: number[] = [1, 2, 3, 4, 5]; // Array representing the star indexes

  constructor() { }

  ngOnInit(): void {}

  // Handle star click (if not readonly)
  onStarClick(star: number): void {
    if (!this.isReadOnly) {
      this.rating = star;
      this.rate.emit(this.rating); // Emit the selected rating
    }
  }
}

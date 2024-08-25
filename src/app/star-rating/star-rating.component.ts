import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() rating: number = 0; // Input property to accept the rating value

  // Generate an array of stars based on the rating value
  get filledStars(): boolean[] {
    const starsCount = 5; // Total number of stars
    const filledStarsCount = Math.round(this.rating); // Round the rating to the nearest whole number
    return Array(starsCount).fill(false).map((_, index) => index < filledStarsCount);
  }
}

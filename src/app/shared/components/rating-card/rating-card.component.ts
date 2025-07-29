import { Component, input } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  imports: [],
  templateUrl: './rating-card.component.html',
  styleUrl: './rating-card.component.css'
})
export class RatingCardComponent {

  rating = input<string>();
  name = input<string>();
  loc = input<string>();

}

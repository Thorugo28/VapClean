import { Component, input } from '@angular/core';

@Component({
  selector: 'app-video-cards',
  imports: [],
  templateUrl: './video-cards.html',
  styleUrl: './video-cards.css'
})
export class VideoCards {

  videoUrl = input<string>();
  tittle = input<string>();
  description = input<string>();
  price = input<number>();

}

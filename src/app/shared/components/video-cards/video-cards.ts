import { Component, input, Inject, PLATFORM_ID } from '@angular/core';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { isPlatformBrowser, CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-cards',
  standalone: true,
  imports: [YouTubePlayerModule, CommonModule, CurrencyPipe],
  templateUrl: './video-cards.html',
  styleUrl: './video-cards.css'
})
export class VideoCards {

  videoId= input<string>();

  link = input<string>();
  tittle = input<string>();
  description = input<string>();
  price = input.required<number>();

  isBestSeller = input<boolean>(false);

  isYoutubeApiReady = false;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object){

    if(isPlatformBrowser(this.platformId)){
      if(!window['YT']) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api'
        document.head.appendChild(tag);
        window['onYouTubeIframeAPIReady'] = () => {
          this.isYoutubeApiReady = true
        };
      } else {
        this.isYoutubeApiReady = true
      }
    }
  }

}
